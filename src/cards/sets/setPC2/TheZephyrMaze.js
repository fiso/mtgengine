"use strict";
const Constants = require ("../../../Constants");
const TheZephyrMazeBase = require("../setPCA/TheZephyrMaze");

class TheZephyrMaze extends TheZephyrMazeBase {
  constructor (game) {
    super(game, "The Zephyr Maze", "Planechase 2012", "PC2");
  }
}

module.exports = TheZephyrMaze;
