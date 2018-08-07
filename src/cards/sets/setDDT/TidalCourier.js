"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Tidal Courier", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = TidalCourier;
