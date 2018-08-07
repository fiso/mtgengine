"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaulMcCabeBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Paul McCabe Bio", "World Championship Decks 1997", "WC97");
  }
}

module.exports = PaulMcCabeBio;
