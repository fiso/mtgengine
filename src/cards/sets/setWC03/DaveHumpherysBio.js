"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaveHumpherysBio extends UnimplementedCard {
  constructor (game) {
    super(game, "Dave Humpherys Bio", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DaveHumpherysBio;
