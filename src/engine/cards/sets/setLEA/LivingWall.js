"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setME4/LivingWall");

class LivingWall extends LivingWallBase {
  constructor (game) {
    super(game, "Living Wall", "Limited Edition Alpha", "LEA");
  }
}

module.exports = LivingWall;
