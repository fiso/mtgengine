"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DimirCluestone extends Card {
  constructor(game) {
    super(game, "Dimir Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = DimirCluestone;
