"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Sentinel", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = DarksteelSentinel;
