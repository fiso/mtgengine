"use strict";
const Constants = require ("../../../Constants");
const WallofWaterBase = require("../setCED/WallofWater");

class WallofWater extends WallofWaterBase {
  constructor(game) {
    super(game, "Wall of Water", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofWater;
