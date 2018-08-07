"use strict";
const Constants = require ("../../../Constants");
const TreasureHuntBase = require("../setC18/TreasureHunt");

class TreasureHunt extends TreasureHuntBase {
  constructor (game) {
    super(game, "Treasure Hunt", "Magic Online Promos", "PRM");
  }
}

module.exports = TreasureHunt;
