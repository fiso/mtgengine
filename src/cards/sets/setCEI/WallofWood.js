"use strict";
const Constants = require ("../../../Constants");
const WallofWoodBase = require("../setCED/WallofWood");

class WallofWood extends WallofWoodBase {
  constructor (game) {
    super(game, "Wall of Wood", "International Collector's Edition", "CEI");
  }
}

module.exports = WallofWood;
