"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../setMED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor (game) {
    super(game, "Animate Wall", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = AnimateWall;
