"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavensRun extends Card {
  constructor(game) {
    super(game, "Raven's Run", "Planechase", "HOP");
  }
}

module.exports = RavensRun;
