"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenalishKnightBase = require("../setATH/BenalishKnight.js");

class BenalishKnight extends BenalishKnightBase {
  constructor(game) {
    super(game, "Benalish Knight", "Tenth Edition", "10E");
  }
}

module.exports = BenalishKnight;
