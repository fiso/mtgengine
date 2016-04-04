"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MazeAbomination extends UnimplementedCard {
  constructor(game) {
    super(game, "Maze Abomination", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeAbomination;
