"use strict";
const Constants = require ("../../../Constants");
const TidalWaveBase = require("../setDDT/TidalWave");

class TidalWave extends TidalWaveBase {
  constructor (game) {
    super(game, "Tidal Wave", "Mirage", "MIR");
  }
}

module.exports = TidalWave;
