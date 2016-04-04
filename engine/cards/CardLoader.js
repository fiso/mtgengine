"use strict";
const UnimplementedCard = require("./UnimplementedCard");

const sets = require("./sets/sets");

class CardLoader {
  constructor (cardName, setName, setCode, game) {
    setCode = "KTK";
    let cardClass = require("./sets/set" + setCode + "/Mountain");
    let card = new cardClass(game, cardName, setName, setCode);
    this._promise = card.ready();
  }

  ready () {
    return this._promise;
  }
}

module.exports = CardLoader;
