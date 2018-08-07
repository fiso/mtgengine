"use strict";
const fetch = require("cross-fetch");
const CardFetcher = require("./CardFetcher");

class Scryfall extends CardFetcher {
  constructor () {
    super();
    this._pendingRequests = {};
  }

  getCard (cardName, setName, setCode, forceFetch) {
    let keyName = this.getKeyName("getCard", cardName);

    if (this._pendingRequests[keyName]) {
      return this._pendingRequests[keyName];
    }

    this._pendingRequests[keyName] = new Promise((resolve) => {
      super.getCard(cardName, setName, setCode, forceFetch).then((result) => {
        delete this._pendingRequests[keyName];
        resolve(result);
      }, (result) => {
        fetch(`https://api.scryfall.com/cards/named?exact=${cardName}`)
        .then((response) => {
          response.json().then((card) => {
            delete this._pendingRequests[keyName];
            this.setObject(keyName, card);
            resolve(card);
           });
        });
      });
    });
    return this._pendingRequests[keyName];
  }
}

module.exports = Scryfall;
