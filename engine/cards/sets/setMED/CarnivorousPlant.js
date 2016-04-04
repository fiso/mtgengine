"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarnivorousPlantBase = require("../setATH/CarnivorousPlant.js");

class CarnivorousPlant extends CarnivorousPlantBase {
  constructor(game) {
    super(game, "Carnivorous Plant", "Masters Edition", "MED");
  }
}

module.exports = CarnivorousPlant;
