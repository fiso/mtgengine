"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandArchitect extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Architect", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = GrandArchitect;
