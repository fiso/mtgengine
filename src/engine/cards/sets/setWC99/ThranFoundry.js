"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranFoundry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Foundry", "World Championship Decks 1999", "WC99");
  }
}

module.exports = ThranFoundry;
