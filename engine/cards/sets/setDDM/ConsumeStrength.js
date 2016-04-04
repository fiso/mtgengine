"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConsumeStrengthBase = require("../setAPC/ConsumeStrength.js");

class ConsumeStrength extends ConsumeStrengthBase {
  constructor(game) {
    super(game, "Consume Strength", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ConsumeStrength;
