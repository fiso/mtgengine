"use strict";
const Constants = require ("../../../Constants");
const PlantElementalBase = require("../setPZ2/PlantElemental");

class PlantElemental extends PlantElementalBase {
  constructor (game) {
    super(game, "Plant Elemental", "Portal", "POR");
  }
}

module.exports = PlantElemental;
