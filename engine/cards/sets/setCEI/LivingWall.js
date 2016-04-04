"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setCED/LivingWall");

class LivingWall extends LivingWallBase {
  constructor(game) {
    super(game, "Living Wall", "International Collector's Edition", "CEI");
  }
}

module.exports = LivingWall;
