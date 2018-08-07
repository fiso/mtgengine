"use strict";
const Constants = require ("../../../Constants");
const WaveofReckoningBase = require("../setC16/WaveofReckoning");

class WaveofReckoning extends WaveofReckoningBase {
  constructor (game) {
    super(game, "Wave of Reckoning", "Mercadian Masques", "MMQ");
  }
}

module.exports = WaveofReckoning;
