"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofWaterBase = require("../setCED/WallofWater.js");

class WallofWater extends WallofWaterBase {
  constructor(game) {
    super(game, "Wall of Water", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofWater;
