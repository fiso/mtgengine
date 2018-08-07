"use strict";
const Constants = require ("../../../Constants");
const EightfoldMazeBase = require("../setME3/EightfoldMaze");

class EightfoldMaze extends EightfoldMazeBase {
  constructor (game) {
    super(game, "Eightfold Maze", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = EightfoldMaze;
