"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EightfoldMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Eightfold Maze", "Masters Edition III", "ME3");
  }
}

module.exports = EightfoldMaze;
