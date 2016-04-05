"use strict";
const Constants = require ("../../../Constants");
const HallowedGroundBase = require("../setICE/HallowedGround");

class HallowedGround extends HallowedGroundBase {
  constructor(game) {
    super(game, "Hallowed Ground", "Masters Edition", "MED");
  }
}

module.exports = HallowedGround;
