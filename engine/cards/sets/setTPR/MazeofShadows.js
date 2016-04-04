"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MazeofShadowsBase = require("../setTMP/MazeofShadows.js");

class MazeofShadows extends MazeofShadowsBase {
  constructor(game) {
    super(game, "Maze of Shadows", "Tempest Remastered", "TPR");
  }
}

module.exports = MazeofShadows;
