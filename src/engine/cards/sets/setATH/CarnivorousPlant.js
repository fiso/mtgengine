"use strict";
const Constants = require ("../../../Constants");
const CarnivorousPlantBase = require("../setMED/CarnivorousPlant");

class CarnivorousPlant extends CarnivorousPlantBase {
  constructor (game) {
    super(game, "Carnivorous Plant", "Anthologies", "ATH");
  }
}

module.exports = CarnivorousPlant;
