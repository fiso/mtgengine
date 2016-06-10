"use strict";
const http = require("http");
const CardFetcher = require("./CardFetcher");

class Deckbrew extends CardFetcher {
  constructor () {
    super();
    this._pendingRequests = {};
  }

  getCard (cardName, setName, setCode, forceFetch) {
    let keyName = this.getKeyName("getCard", cardName);

    if (this._pendingRequests[keyName]) {
      return this._pendingRequests[keyName];
    }

    this._pendingRequests[keyName] = new Promise((resolve, reject) => {
      super.getCard(cardName, setName, setCode, forceFetch).then((result) => {
        delete this._pendingRequests[keyName];
        resolve(result);
      }, (result) => {
        http.request({
          host: "api.deckbrew.com",
          path: encodeURI(`/mtg/cards?name=${cardName}`)
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
              let pos = cardIter["name"].toLowerCase().indexOf(cardName.toLowerCase());
              if (pos === -1) {
                continue;
              }
              if (pos <= bestMatch) {
                // Try to match with names that are as close in length as possible
                if (Math.abs(cardIter.name.length - cardName.length) <=
                    Math.abs(card.name.length - cardName.length)) {
                  bestMatch = pos;
                  card = cardIter;
                }
              }
            }

            /**/
            // Pick out the best matching edition that has a non-null image
            let edition = card.editions[0];
            bestMatch = -1;

            for (let editionIter of card.editions) {
              if (editionIter.image_url.indexOf("/0.jpg") === -1) {
                edition = editionIter;
                break;
              }
            }

            let cardPrinting = JSON.parse(JSON.stringify(card));  // Deep copy
            //delete cardPrinting.editions;
            //cardPrinting.printing = JSON.parse(JSON.stringify(edition));
            cardPrinting.editions = [JSON.parse(JSON.stringify(edition))];
            /**/

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
