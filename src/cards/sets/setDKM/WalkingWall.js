"use strict";
const Constants = require ("../../../Constants");
const WalkingWallBase = require("../setMED/WalkingWall");

class WalkingWall extends WalkingWallBase {
  constructor (game) {
    super(game, "Walking Wall", "Deckmasters", "DKM");
  }
}

module.exports = WalkingWall;
