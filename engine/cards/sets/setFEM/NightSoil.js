"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NightSoilBase = require("../setC13/NightSoil.js");

class NightSoil extends NightSoilBase {
  constructor(game) {
    super(game, "Night Soil", "Fallen Empires", "FEM");
  }
}

module.exports = NightSoil;
