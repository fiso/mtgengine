"use strict";
const Constants = require ("../../../Constants");
const TidalWaveBase = require("../setDDT/TidalWave");

class TidalWave extends TidalWaveBase {
  constructor (game) {
    super(game, "Tidal Wave", "Eternal Masters", "EMA");
  }
}

module.exports = TidalWave;
