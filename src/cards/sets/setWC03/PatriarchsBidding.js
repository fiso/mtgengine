"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatriarchsBidding extends UnimplementedCard {
  constructor (game) {
    super(game, "Patriarch's Bidding", "World Championship Decks 2003", "WC03");
  }
}

module.exports = PatriarchsBidding;
