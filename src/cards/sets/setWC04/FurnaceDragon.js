"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace Dragon", "World Championship Decks 2004", "WC04");
  }
}

module.exports = FurnaceDragon;
