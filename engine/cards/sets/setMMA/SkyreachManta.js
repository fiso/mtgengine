"use strict";
const Constants = require ("../../../Constants");
const SkyreachMantaBase = require("../set5DN/SkyreachManta");

class SkyreachManta extends SkyreachMantaBase {
  constructor(game) {
    super(game, "Skyreach Manta", "Modern Masters", "MMA");
  }
}

module.exports = SkyreachManta;
