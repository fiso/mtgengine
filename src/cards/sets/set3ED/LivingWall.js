"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setCED/LivingWall");

class LivingWall extends LivingWallBase {
  constructor(game) {
    super(game, "Living Wall", "Revised Edition", "3ED");
  }
}

module.exports = LivingWall;
