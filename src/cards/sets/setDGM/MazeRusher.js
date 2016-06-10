"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazeRusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Maze Rusher", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeRusher;
