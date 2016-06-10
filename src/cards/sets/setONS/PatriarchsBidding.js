"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatriarchsBidding extends UnimplementedCard {
  constructor (game) {
    super(game, "Patriarch's Bidding", "Onslaught", "ONS");
  }
}

module.exports = PatriarchsBidding;
