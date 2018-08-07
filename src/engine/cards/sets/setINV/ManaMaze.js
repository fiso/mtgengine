"use strict";
const Constants = require ("../../../Constants");
const ManaMazeBase = require("../setWC01/ManaMaze");

class ManaMaze extends ManaMazeBase {
  constructor (game) {
    super(game, "Mana Maze", "Invasion", "INV");
  }
}

module.exports = ManaMaze;
