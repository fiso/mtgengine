"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedSteppe extends Card {
  constructor(game) {
    super(game, "Blighted Steppe", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedSteppe;
