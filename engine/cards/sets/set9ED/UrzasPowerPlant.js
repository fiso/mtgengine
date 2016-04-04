"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasPowerPlantBase = require("../setATQ/UrzasPowerPlant.js");

class UrzasPowerPlant extends UrzasPowerPlantBase {
  constructor(game) {
    super(game, "Urza's Power Plant", "Ninth Edition", "9ED");
  }
}

module.exports = UrzasPowerPlant;
