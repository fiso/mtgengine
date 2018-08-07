"use strict";
const Constants = require ("../../../Constants");
const AkromaAngelofWrathBase = require("../setA25/AkromaAngelofWrath");

class AkromaAngelofWrath extends AkromaAngelofWrathBase {
  constructor (game) {
    super(game, "Akroma, Angel of Wrath", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = AkromaAngelofWrath;
