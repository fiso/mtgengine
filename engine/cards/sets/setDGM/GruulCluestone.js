"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulCluestone extends Card {
  constructor(game) {
    super(game, "Gruul Cluestone", "Dragon's Maze", "DGM");
  }
}

module.exports = GruulCluestone;
