"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrislySpectacle extends UnimplementedCard {
  constructor(game) {
    super(game, "Grisly Spectacle", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GrislySpectacle;
