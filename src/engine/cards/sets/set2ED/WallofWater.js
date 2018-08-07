"use strict";
const Constants = require ("../../../Constants");
const WallofWaterBase = require("../set4ED/WallofWater");

class WallofWater extends WallofWaterBase {
  constructor (game) {
    super(game, "Wall of Water", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofWater;
