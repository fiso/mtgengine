"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwellofGrowth extends Card {
  constructor(game) {
    super(game, "Swell of Growth", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SwellofGrowth;
