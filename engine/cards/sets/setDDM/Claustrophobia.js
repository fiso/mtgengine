"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Claustrophobia extends UnimplementedCard {
  constructor(game) {
    super(game, "Claustrophobia", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Claustrophobia;
