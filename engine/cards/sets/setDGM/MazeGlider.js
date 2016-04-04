"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeGlider extends Card {
  constructor(game) {
    super(game, "Maze Glider", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeGlider;
