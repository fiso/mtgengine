"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeRusher extends Card {
  constructor(game) {
    super(game, "Maze Rusher", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeRusher;
