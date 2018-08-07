"use strict";
const Constants = require ("../../../Constants");
const BlastingStationBase = require("../set5DN/BlastingStation");

class BlastingStation extends BlastingStationBase {
  constructor (game) {
    super(game, "Blasting Station", "Magic Online Promos", "PRM");
  }
}

module.exports = BlastingStation;
