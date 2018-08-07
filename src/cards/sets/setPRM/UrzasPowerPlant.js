"use strict";
const Constants = require ("../../../Constants");
const UrzasPowerPlantBase = require("../setME4/UrzasPowerPlant");

class UrzasPowerPlant extends UrzasPowerPlantBase {
  constructor (game) {
    super(game, "Urza's Power Plant", "Magic Online Promos", "PRM");
  }
}

module.exports = UrzasPowerPlant;
