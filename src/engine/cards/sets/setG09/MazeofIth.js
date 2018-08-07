"use strict";
const Constants = require ("../../../Constants");
const MazeofIthBase = require("../setEMA/MazeofIth");

class MazeofIth extends MazeofIthBase {
  constructor (game) {
    super(game, "Maze of Ith", "Judge Gift Cards 2009", "G09");
  }
}

module.exports = MazeofIth;
