"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofWaterBase = require("../setCED/WallofWater.js");

class WallofWater extends WallofWaterBase {
  constructor(game) {
    super(game, "Wall of Water", "Revised Edition", "3ED");
  }
}

module.exports = WallofWater;
