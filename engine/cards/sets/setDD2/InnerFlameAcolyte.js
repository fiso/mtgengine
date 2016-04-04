"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InnerFlameAcolyteBase = require("../setDD3_JVC/InnerFlameAcolyte.js");

class InnerFlameAcolyte extends InnerFlameAcolyteBase {
  constructor(game) {
    super(game, "Inner-Flame Acolyte", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = InnerFlameAcolyte;
