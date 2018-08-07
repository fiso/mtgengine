"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setA25/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "Legions", "LGN");
  }
}

module.exports = AkromaAngelofWrath;
