"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Wall", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = SteelWall;
