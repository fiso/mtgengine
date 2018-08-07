"use strict";
const Constants = require ("../../../Constants");
const MazeofShadowsBase = require("../setTPR/MazeofShadows");

class MazeofShadows extends MazeofShadowsBase {
  constructor (game) {
    super(game, "Maze of Shadows", "Tempest", "TMP");
  }
}

module.exports = MazeofShadows;
