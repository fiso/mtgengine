"use strict";
const Constants = require ("../../../Constants");
const SkyreachMantaBase = require("../setMM2/SkyreachManta");

class SkyreachManta extends SkyreachMantaBase {
  constructor (game) {
    super(game, "Skyreach Manta", "Fifth Dawn", "5DN");
  }
}

module.exports = SkyreachManta;
