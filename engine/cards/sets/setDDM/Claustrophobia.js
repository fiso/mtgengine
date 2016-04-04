"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Claustrophobia extends Card {
  constructor(game) {
    super(game, "Claustrophobia", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Claustrophobia;
