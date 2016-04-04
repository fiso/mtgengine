"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MazeAbomination extends Card {
  constructor(game) {
    super(game, "Maze Abomination", "Dragon's Maze", "DGM");
  }
}

module.exports = MazeAbomination;
