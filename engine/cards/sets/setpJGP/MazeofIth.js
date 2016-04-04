"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MazeofIthBase = require("../setV12/MazeofIth.js");

class MazeofIth extends MazeofIthBase {
  constructor(game) {
    super(game, "Maze of Ith", "Judge Gift Program", "pJGP");
  }
}

module.exports = MazeofIth;
