"use strict";
const Constants = require ("../../../Constants");
const AnimateWallBase = require("../setMED/AnimateWall");

class AnimateWall extends AnimateWallBase {
  constructor (game) {
    super(game, "Animate Wall", "Fifth Edition", "5ED");
  }
}

module.exports = AnimateWall;
