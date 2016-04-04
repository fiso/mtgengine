"use strict";
const CachableApi = require("./CacheableApi");

class CardFetcher extends CachableApi {
  constructor () {
    super();
    if (new.target === CardFetcher) {
      throw new TypeError("CardFetcher is not to be used directly");
    }
  }

  getKeyName (cardName, setName) {
    return `getCard${cardName}${setName}`;
  }

  getCard (cardName, setName, setCode, forceFetch) {
    let keyName = this.getKeyName(cardName, setName);
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
