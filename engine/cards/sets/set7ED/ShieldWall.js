"use strict";
const Constants = require ("../../../Constants");
const ShieldWallBase = require("../setCHR/ShieldWall");

class ShieldWall extends ShieldWallBase {
  constructor(game) {
    super(game, "Shield Wall", "Seventh Edition", "7ED");
  }
}

module.exports = ShieldWall;
