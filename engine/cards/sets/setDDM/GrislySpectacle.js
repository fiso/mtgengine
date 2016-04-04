"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrislySpectacle extends Card {
  constructor(game) {
    super(game, "Grisly Spectacle", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GrislySpectacle;
