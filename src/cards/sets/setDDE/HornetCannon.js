"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetCannon extends UnimplementedCard {
  constructor(game) {
    super(game, "Hornet Cannon", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = HornetCannon;
