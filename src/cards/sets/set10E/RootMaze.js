"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Maze", "Tenth Edition", "10E");
  }
}

module.exports = RootMaze;
