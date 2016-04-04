"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../set6ED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor(game) {
    super(game, "Animate Wall", "Collector's Edition", "CED");
  }
}

module.exports = AnimateWall;
