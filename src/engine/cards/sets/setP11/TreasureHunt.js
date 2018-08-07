"use strict";
const Constants = require ("../../../Constants");
const TreasureHuntBase = require("../setC18/TreasureHunt");

class TreasureHunt extends TreasureHuntBase {
  constructor (game) {
    super(game, "Treasure Hunt", "Magic Player Rewards 2011", "P11");
  }
}

module.exports = TreasureHunt;
