"use strict";
const Constants = require ("../../../Constants");
const UrzasPowerPlantBase = require("../setATQ/UrzasPowerPlant");

class UrzasPowerPlant extends UrzasPowerPlantBase {
  constructor (game) {
    super(game, "Urza's Power Plant", "Ninth Edition", "9ED");
  }
}

module.exports = UrzasPowerPlant;
