"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientDen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Den", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = AncientDen;
