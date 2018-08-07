"use strict";
const Constants = require ("../../../Constants");
const BenalishKnightBase = require("../set10E/BenalishKnight");

class BenalishKnight extends BenalishKnightBase {
  constructor (game) {
    super(game, "Benalish Knight", "Weatherlight", "WTH");
  }
}

module.exports = BenalishKnight;
