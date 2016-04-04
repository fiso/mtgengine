"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantGrowthBase = require("../setATH/GiantGrowth.js");

class GiantGrowth extends GiantGrowthBase {
  constructor(game) {
    super(game, "Giant Growth", "Deckmasters", "DKM");
  }
}

module.exports = GiantGrowth;
