"use strict";
const Constants = require ("../../../Constants");
const WallofIceBase = require("../setCED/WallofIce");

class WallofIce extends WallofIceBase {
  constructor(game) {
    super(game, "Wall of Ice", "International Collector's Edition", "CEI");
  }
}

module.exports = WallofIce;
