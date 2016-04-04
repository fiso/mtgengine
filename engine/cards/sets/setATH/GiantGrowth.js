"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantGrowth extends Card {
  constructor(game) {
    super(game, "Giant Growth", "Anthologies", "ATH");
  }
}

module.exports = GiantGrowth;
