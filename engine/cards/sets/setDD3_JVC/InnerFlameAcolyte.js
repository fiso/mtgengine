"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InnerFlameAcolyte extends Card {
  constructor(game) {
    super(game, "Inner-Flame Acolyte", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = InnerFlameAcolyte;
