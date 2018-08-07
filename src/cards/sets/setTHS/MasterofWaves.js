"use strict";
const Constants = require ("../../../Constants");
const MasterofWavesBase = require("../setDDT/MasterofWaves");

class MasterofWaves extends MasterofWavesBase {
  constructor (game) {
    super(game, "Master of Waves", "Theros", "THS");
  }
}

module.exports = MasterofWaves;
