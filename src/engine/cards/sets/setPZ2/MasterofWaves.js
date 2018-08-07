"use strict";
const Constants = require ("../../../Constants");
const MasterofWavesBase = require("../setDDT/MasterofWaves");

class MasterofWaves extends MasterofWavesBase {
  constructor (game) {
    super(game, "Master of Waves", "You Make the Cube", "PZ2");
  }
}

module.exports = MasterofWaves;
