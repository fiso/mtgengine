"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetCluestone extends Card {
  constructor(game) {
    super(game, "Izzet Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = IzzetCluestone;
