"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setCED/LivingWall");

class LivingWall extends LivingWallBase {
  constructor (game) {
    super(game, "Living Wall", "Limited Edition Beta", "LEB");
  }
}

module.exports = LivingWall;
