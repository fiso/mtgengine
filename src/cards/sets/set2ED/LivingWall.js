"use strict";
const Constants = require ("../../../Constants");
const LivingWallBase = require("../setCED/LivingWall");

class LivingWall extends LivingWallBase {
  constructor (game) {
    super(game, "Living Wall", "Unlimited Edition", "2ED");
  }
}

module.exports = LivingWall;
