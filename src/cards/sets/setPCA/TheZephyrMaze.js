"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheZephyrMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "The Zephyr Maze", "Planechase Anthology", "PCA");
  }
}

module.exports = TheZephyrMaze;
