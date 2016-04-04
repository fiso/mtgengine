"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariCluestone extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = GolgariCluestone;
