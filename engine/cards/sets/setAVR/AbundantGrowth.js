"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbundantGrowth extends Card {
  constructor(game) {
    super(game, "Abundant Growth", "Avacyn Restored", "AVR");
  }
}

module.exports = AbundantGrowth;
