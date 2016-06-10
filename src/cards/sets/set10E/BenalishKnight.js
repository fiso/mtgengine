"use strict";
const Constants = require ("../../../Constants");
const BenalishKnightBase = require("../setATH/BenalishKnight");

class BenalishKnight extends BenalishKnightBase {
  constructor (game) {
    super(game, "Benalish Knight", "Tenth Edition", "10E");
  }
}

module.exports = BenalishKnight;
