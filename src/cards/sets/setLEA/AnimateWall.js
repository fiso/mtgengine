"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../set6ED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor(game) {
    super(game, "Animate Wall", "Limited Edition Alpha", "LEA");
  }
}

module.exports = AnimateWall;
