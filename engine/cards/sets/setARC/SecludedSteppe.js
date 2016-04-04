"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SecludedSteppe extends Card {
  constructor(game) {
    super(game, "Secluded Steppe", "Archenemy", "ARC");
  }
}

module.exports = SecludedSteppe;
