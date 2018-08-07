"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddingWatchtower extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidding Watchtower", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ForbiddingWatchtower;
