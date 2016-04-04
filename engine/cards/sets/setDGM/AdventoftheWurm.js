"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdventoftheWurm extends Card {
  constructor(game) {
    super(game, "Advent of the Wurm", "Dragon's Maze", "DGM");
  }
}

module.exports = AdventoftheWurm;
