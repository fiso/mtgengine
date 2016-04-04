"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoverBarrier extends Card {
  constructor(game) {
    super(game, "Hover Barrier", "Return to Ravnica", "RTR");
  }
}

module.exports = HoverBarrier;
