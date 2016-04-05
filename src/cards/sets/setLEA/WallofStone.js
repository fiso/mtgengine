"use strict";
const Constants = require ("../../../Constants");
const WallofStoneBase = require("../setCED/WallofStone");

class WallofStone extends WallofStoneBase {
  constructor(game) {
    super(game, "Wall of Stone", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofStone;
