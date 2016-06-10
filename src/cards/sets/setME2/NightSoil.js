"use strict";
const Constants = require ("../../../Constants");
const NightSoilBase = require("../setC13/NightSoil");

class NightSoil extends NightSoilBase {
  constructor (game) {
    super(game, "Night Soil", "Masters Edition II", "ME2");
  }
}

module.exports = NightSoil;
