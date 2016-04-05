"use strict";
const Constants = require ("../../../Constants");
const MazeofShadowsBase = require("../setTMP/MazeofShadows");

class MazeofShadows extends MazeofShadowsBase {
  constructor(game) {
    super(game, "Maze of Shadows", "Tempest Remastered", "TPR");
  }
}

module.exports = MazeofShadows;
