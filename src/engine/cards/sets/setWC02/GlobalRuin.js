"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlobalRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Global Ruin", "World Championship Decks 2002", "WC02");
  }
}

module.exports = GlobalRuin;
