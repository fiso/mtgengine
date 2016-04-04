"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LowlandTracker extends Card {
  constructor(game) {
    super(game, "Lowland Tracker", "Legions", "LGN");
  }
}

module.exports = LowlandTracker;
