"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerrainElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Terrain Elemental", "Kaladesh", "KLD");
  }
}

module.exports = TerrainElemental;
