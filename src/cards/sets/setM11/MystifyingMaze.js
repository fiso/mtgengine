"use strict";
const Constants = require ("../../../Constants");
const MystifyingMazeBase = require("../setC17/MystifyingMaze");

class MystifyingMaze extends MystifyingMazeBase {
  constructor (game) {
    super(game, "Mystifying Maze", "Magic 2011", "M11");
  }
}

module.exports = MystifyingMaze;
