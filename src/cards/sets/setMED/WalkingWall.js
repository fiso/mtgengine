"use strict";
const Constants = require ("../../../Constants");
const WalkingWallBase = require("../setDKM/WalkingWall");

class WalkingWall extends WalkingWallBase {
  constructor (game) {
    super(game, "Walking Wall", "Masters Edition", "MED");
  }
}

module.exports = WalkingWall;
