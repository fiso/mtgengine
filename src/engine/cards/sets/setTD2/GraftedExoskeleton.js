"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraftedExoskeleton extends UnimplementedCard {
  constructor (game) {
    super(game, "Grafted Exoskeleton", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = GraftedExoskeleton;
