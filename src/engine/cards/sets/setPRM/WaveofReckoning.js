"use strict";
const Constants = require ("../../../Constants");
const WaveofReckoningBase = require("../setC16/WaveofReckoning");

class WaveofReckoning extends WaveofReckoningBase {
  constructor (game) {
    super(game, "Wave of Reckoning", "Magic Online Promos", "PRM");
  }
}

module.exports = WaveofReckoning;
