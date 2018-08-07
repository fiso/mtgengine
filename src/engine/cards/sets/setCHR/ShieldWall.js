"use strict";
const Constants = require ("../../../Constants");
const ShieldWallBase = require("../set7ED/ShieldWall");

class ShieldWall extends ShieldWallBase {
  constructor (game) {
    super(game, "Shield Wall", "Chronicles", "CHR");
  }
}

module.exports = ShieldWall;
