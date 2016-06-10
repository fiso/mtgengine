"use strict";
const Constants = require ("../../../Constants");
const CarnivorousPlantBase = require("../setATH/CarnivorousPlant");

class CarnivorousPlant extends CarnivorousPlantBase {
  constructor (game) {
    super(game, "Carnivorous Plant", "The Dark", "DRK");
  }
}

module.exports = CarnivorousPlant;
