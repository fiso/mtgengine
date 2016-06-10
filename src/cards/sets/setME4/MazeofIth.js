"use strict";
const Constants = require ("../../../Constants");
const MazeofIthBase = require("../setV12/MazeofIth");

class MazeofIth extends MazeofIthBase {
  constructor (game) {
    super(game, "Maze of Ith", "Masters Edition IV", "ME4");
  }
}

module.exports = MazeofIth;
