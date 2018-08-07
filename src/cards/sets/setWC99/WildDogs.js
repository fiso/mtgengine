"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildDogs extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Dogs", "World Championship Decks 1999", "WC99");
  }
}

module.exports = WildDogs;
