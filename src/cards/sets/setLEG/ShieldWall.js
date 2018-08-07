"use strict";
const Constants = require ("../../../Constants");
const ShieldWallBase = require("../set7ED/ShieldWall");

class ShieldWall extends ShieldWallBase {
  constructor (game) {
    super(game, "Shield Wall", "Legends", "LEG");
  }
}

module.exports = ShieldWall;
