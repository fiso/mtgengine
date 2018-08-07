"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CogworkTracker extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogwork Tracker", "Conspiracy", "CNS");
  }
}

module.exports = CogworkTracker;
