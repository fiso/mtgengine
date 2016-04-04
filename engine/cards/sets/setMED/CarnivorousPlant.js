"use strict";
const Constants = require ("../../../Constants");
const CarnivorousPlantBase = require("../setATH/CarnivorousPlant");

class CarnivorousPlant extends CarnivorousPlantBase {
  constructor(game) {
    super(game, "Carnivorous Plant", "Masters Edition", "MED");
  }
}

module.exports = CarnivorousPlant;
