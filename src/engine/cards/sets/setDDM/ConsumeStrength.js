"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumeStrength extends UnimplementedCard {
  constructor (game) {
    super(game, "Consume Strength", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = ConsumeStrength;
