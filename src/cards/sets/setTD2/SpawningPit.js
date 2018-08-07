"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningPit extends UnimplementedCard {
  constructor (game) {
    super(game, "Spawning Pit", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SpawningPit;
