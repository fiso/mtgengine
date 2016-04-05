"use strict";
const Constants = require ("../../../Constants");
const NightSoilBase = require("../setC13/NightSoil");

class NightSoil extends NightSoilBase {
  constructor(game) {
    super(game, "Night Soil", "Fallen Empires", "FEM");
  }
}

module.exports = NightSoil;
