"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setDD3_DVD/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AkromaAngelofWrath;
