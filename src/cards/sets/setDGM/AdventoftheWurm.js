"use strict";
const Constants = require ("../../../Constants");
const AdventoftheWurmBase = require("../setMM3/AdventoftheWurm");

class AdventoftheWurm extends AdventoftheWurmBase {
  constructor (game) {
    super(game, "Advent of the Wurm", "Dragon's Maze", "DGM");
  }
}

module.exports = AdventoftheWurm;
