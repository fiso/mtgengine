"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshCasualties extends Card {
  constructor(game) {
    super(game, "Marsh Casualties", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MarshCasualties;
