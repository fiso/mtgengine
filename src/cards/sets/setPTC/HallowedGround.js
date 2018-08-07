"use strict";
const Constants = require ("../../../Constants");
const HallowedGroundBase = require("../setMED/HallowedGround");

class HallowedGround extends HallowedGroundBase {
  constructor (game) {
    super(game, "Hallowed Ground", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = HallowedGround;
