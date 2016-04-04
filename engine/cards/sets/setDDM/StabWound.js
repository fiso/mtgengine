"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StabWound extends Card {
  constructor(game) {
    super(game, "Stab Wound", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StabWound;
