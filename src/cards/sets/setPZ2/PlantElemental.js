"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlantElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Plant Elemental", "You Make the Cube", "PZ2");
  }
}

module.exports = PlantElemental;
