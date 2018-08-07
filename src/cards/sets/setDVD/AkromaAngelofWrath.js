"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setA25/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = AkromaAngelofWrath;
