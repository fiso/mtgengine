"use strict";
const Constants = require ("../../../Constants");
const ConsumeStrengthBase = require("../setAPC/ConsumeStrength");

class ConsumeStrength extends ConsumeStrengthBase {
  constructor(game) {
    super(game, "Consume Strength", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ConsumeStrength;
