"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheZephyrMaze extends UnimplementedCard {
  constructor(game) {
    super(game, "The Zephyr Maze", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TheZephyrMaze;
