"use strict";
const Constants = require ("../../../Constants");
const PitKeeperBase = require("../setMM3/PitKeeper");

class PitKeeper extends PitKeeperBase {
  constructor (game) {
    super(game, "Pit Keeper", "Time Spiral", "TSP");
  }
}

module.exports = PitKeeper;
