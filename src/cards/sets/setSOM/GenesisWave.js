"use strict";
const Constants = require ("../../../Constants");
const GenesisWaveBase = require("../setIMA/GenesisWave");

class GenesisWave extends GenesisWaveBase {
  constructor (game) {
    super(game, "Genesis Wave", "Scars of Mirrodin", "SOM");
  }
}

module.exports = GenesisWave;
