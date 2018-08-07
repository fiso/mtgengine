"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../setMED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor (game) {
    super(game, "Animate Wall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnimateWall;
