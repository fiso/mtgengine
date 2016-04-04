"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheZephyrMaze extends Card {
  constructor(game) {
    super(game, "The Zephyr Maze", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TheZephyrMaze;
