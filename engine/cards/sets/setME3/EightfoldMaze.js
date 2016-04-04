"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EightfoldMaze extends Card {
  constructor(game) {
    super(game, "Eightfold Maze", "Masters Edition III", "ME3");
  }
}

module.exports = EightfoldMaze;
