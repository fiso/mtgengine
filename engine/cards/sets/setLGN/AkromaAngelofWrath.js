"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromaAngelofWrathBase = require("../setDD3_DVD/AkromaAngelofWrath.js");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor(game) {
    super(game, "Akroma, Angel of Wrath", "Legions", "LGN");
  }
}

module.exports = AkromaAngelofWrath;
