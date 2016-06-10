"use strict";
const Constants = require ("../../../Constants");
const UrzasPowerPlantBase = require("../setATQ/UrzasPowerPlant");

class UrzasPowerPlant extends UrzasPowerPlantBase {
  constructor (game) {
    super(game, "Urza's Power Plant", "Eighth Edition", "8ED");
  }
}

module.exports = UrzasPowerPlant;
