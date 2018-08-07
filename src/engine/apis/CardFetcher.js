"use strict";
const CachableApi = require("./CacheableApi");

class CardFetcher extends CachableApi {
  constructor () {
    super();
    if (new.target === CardFetcher) {
      throw new TypeError("CardFetcher is not to be used directly");
    }
  }

  getKeyName (operation, cardName, setName, setCode) {
    return `${operation}${cardName}${setName}${setCode}`;
  }

  getCard (cardName, setName, setCode, forceFetch) {
    let keyName = this.getKeyName("getCard", cardName, setName, setCode);
    return new Promise((resolve, reject) => {
      if (!forceFetch && this.getObject(keyName)) {
        resolve(this.getObject(keyName));
      } else {
        reject();
      }
    });
  }
}

module.exports = CardFetcher;
