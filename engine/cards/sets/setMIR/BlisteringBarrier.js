"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlisteringBarrier extends Card {
  constructor(game) {
    super(game, "Blistering Barrier", "Mirage", "MIR");
  }
}

module.exports = BlisteringBarrier;
