"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LowlandTracker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lowland Tracker", "Legions", "LGN");
  }
}

module.exports = LowlandTracker;
