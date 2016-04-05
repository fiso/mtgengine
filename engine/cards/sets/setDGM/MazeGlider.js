"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazeGlider extends UnimplementedCard {
  constructor(game) {
    super(game, "Maze Glider", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeGlider;
