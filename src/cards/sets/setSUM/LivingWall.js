"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setME4/LivingWall");

class LivingWall extends LivingWallBase {
  constructor (game) {
    super(game, "Living Wall", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = LivingWall;
