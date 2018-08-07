"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RackandRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Rack and Ruin", "World Championship Decks 2000", "WC00");
  }
}

module.exports = RackandRuin;
