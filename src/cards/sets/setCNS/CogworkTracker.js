"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Tracker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkTracker;
