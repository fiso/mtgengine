"use strict";
const Constants = require ("../../../Constants");
const MoltenRainBase = require("../setMM3/MoltenRain");

class MoltenRain extends MoltenRainBase {
  constructor (game) {
    super(game, "Molten Rain", "Mirrodin", "MRD");
  }
}

module.exports = MoltenRain;
