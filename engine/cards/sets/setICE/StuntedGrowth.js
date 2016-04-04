"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StuntedGrowth extends Card {
  constructor(game) {
    super(game, "Stunted Growth", "Ice Age", "ICE");
  }
}

module.exports = StuntedGrowth;
