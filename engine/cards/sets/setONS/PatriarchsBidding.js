"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatriarchsBidding extends Card {
  constructor(game) {
    super(game, "Patriarch's Bidding", "Onslaught", "ONS");
  }
}

module.exports = PatriarchsBidding;
