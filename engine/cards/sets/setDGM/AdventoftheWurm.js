"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdventoftheWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Advent of the Wurm", "Dragon's Maze", "DGM");
  }
}

module.exports = AdventoftheWurm;
