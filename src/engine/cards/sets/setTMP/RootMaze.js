"use strict";
const Constants = require ("../../../Constants");
const RootMazeBase = require("../set10E/RootMaze");

class RootMaze extends RootMazeBase {
  constructor (game) {
    super(game, "Root Maze", "Tempest", "TMP");
  }
}

module.exports = RootMaze;
