"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootMaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Maze", "Tempest", "TMP");
  }
}

module.exports = RootMaze;
