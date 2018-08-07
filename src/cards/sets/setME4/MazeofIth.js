"use strict";
const Constants = require ("../../../Constants");
const MazeofIthBase = require("../setEMA/MazeofIth");

class MazeofIth extends MazeofIthBase {
  constructor (game) {
    super(game, "Maze of Ith", "Masters Edition IV", "ME4");
  }
}

module.exports = MazeofIth;
