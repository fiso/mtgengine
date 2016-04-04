"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootMaze extends Card {
  constructor(game) {
    super(game, "Root Maze", "Tempest", "TMP");
  }
}

module.exports = RootMaze;
