"use strict";
const Constants = require ("../../../Constants");
const DarkMazeBase = require("../set5ED/DarkMaze");

class DarkMaze extends DarkMazeBase {
  constructor(game) {
    super(game, "Dark Maze", "Homelands", "HML");
  }
}

module.exports = DarkMaze;
