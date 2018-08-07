"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = DimirCluestone;
