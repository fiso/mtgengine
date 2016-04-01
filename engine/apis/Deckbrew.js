"use strict";
const http = require("http");
const CardFetcher = require("./CardFetcher");

class Deckbrew extends CardFetcher {
  constructor () {
    super();
    this._pendingRequests = {};
  }

  getCard (name, set, forceFetch) {
    let keyName = `getCard${name}${set}`;

    if (this._pendingRequests[keyName]) {
      return this._pendingRequests[keyName];
    }

    this._pendingRequests[keyName] = new Promise((resolve, reject) => {
      super.getCard(name, set, forceFetch).then((result) => {
        delete this._pendingRequests[keyName];
        resolve(result);
      }, (result) => {
        http.request({
          host: "api.deckbrew.com",
          path: encodeURI(`/mtg/cards?name=${name}`)
        }, response => {
          let data = "";
          response.on("data", chunk => {
            data += chunk;
          });
          response.on("end", () => {
            let cards = JSON.parse(data.toString());

            if (cards.length < 1) {
              reject();
              return;
            }

            // Pick out the best possible match.
            // This is needed because a search for "arid" will return
            // ARID mesa, fylmARID, homARID warrior etc
            let card = cards[0];
            let bestMatch = Number.MAX_SAFE_INTEGER;
            for (let cardIter of cards) {
              let pos = cardIter["name"].toLowerCase().indexOf(name.toLowerCase());
              if (pos === -1) {
                continue;
              }
              if (pos <= bestMatch) {
                // Try to match with names that are as close in length as possible
                if (Math.abs(cardIter.name.length - name.length) <=
                    Math.abs(card.name.length - name.length)) {
                  bestMatch = pos;
                  card = cardIter;
                }
              }
            }

            // Pick out the best matching edition that has a non-null image
            let edition = card.editions[0];
            bestMatch = -1;
            for (let editionIter of card.editions) {
              if (editionIter.image_url.indexOf("/0.jpg") !== -1) {
                continue;
              }

              if (set) {
                // If we were given a specific set...
                let pos = editionIter["set"].toLowerCase().indexOf(set);
                if (pos === -1) {
                  continue;
                }
                if (pos < bestMatch) {
                  bestMatch = pos;
                  edition = editionIter;
                }
              } else {
                // If set doesn't matter
                edition = editionIter;
                break;
              }
            }

            let cardPrinting = JSON.parse(JSON.stringify(card));  // Deep copy
            delete cardPrinting.editions;
            cardPrinting.printing = JSON.parse(JSON.stringify(edition));

            this.setObject(keyName, cardPrinting);
            delete this._pendingRequests[keyName];
            resolve(cardPrinting);
          });
        }).end();
      });
    });
    return this._pendingRequests[keyName];
  }
}

module.exports = Deckbrew;
