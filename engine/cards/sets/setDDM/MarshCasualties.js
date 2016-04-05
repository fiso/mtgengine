"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshCasualties extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Casualties", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MarshCasualties;
