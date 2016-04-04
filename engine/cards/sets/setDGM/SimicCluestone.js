"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicCluestone extends Card {
  constructor(game) {
    super(game, "Simic Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = SimicCluestone;
