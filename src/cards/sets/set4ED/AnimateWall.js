"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../set6ED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor(game) {
    super(game, "Animate Wall", "Fourth Edition", "4ED");
  }
}

module.exports = AnimateWall;
