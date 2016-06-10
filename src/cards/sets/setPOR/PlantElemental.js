"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlantElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Plant Elemental", "Portal", "POR");
  }
}

module.exports = PlantElemental;
