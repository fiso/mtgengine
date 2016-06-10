"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = SimicCluestone;
