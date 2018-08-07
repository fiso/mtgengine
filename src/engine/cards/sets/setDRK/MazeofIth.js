"use strict";
const Constants = require ("../../../Constants");
const MazeofIthBase = require("../setEMA/MazeofIth");

class MazeofIth extends MazeofIthBase {
  constructor (game) {
    super(game, "Maze of Ith", "The Dark", "DRK");
  }
}

module.exports = MazeofIth;
