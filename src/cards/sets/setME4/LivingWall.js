"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setCED/LivingWall");

class LivingWall extends LivingWallBase {
  constructor(game) {
    super(game, "Living Wall", "Masters Edition IV", "ME4");
  }
}

module.exports = LivingWall;
