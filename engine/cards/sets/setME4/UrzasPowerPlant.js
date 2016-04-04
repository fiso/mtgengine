"use strict";
const Constants = require ("../../../Constants");
const UrzasPowerPlantBase = require("../setATQ/UrzasPowerPlant");

class UrzasPowerPlant extends UrzasPowerPlantBase {
  constructor(game) {
    super(game, "Urza's Power Plant", "Masters Edition IV", "ME4");
  }
}

module.exports = UrzasPowerPlant;
