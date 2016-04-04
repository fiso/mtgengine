"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WalkingWallBase = require("../setDKM/WalkingWall.js");

class WalkingWall extends WalkingWallBase {
  constructor(game) {
    super(game, "Walking Wall", "Masters Edition", "MED");
  }
}

module.exports = WalkingWall;
