"use strict";
const Constants = require ("../../../Constants");
const WallofIceBase = require("../setCED/WallofIce");

class WallofIce extends WallofIceBase {
  constructor(game) {
    super(game, "Wall of Ice", "Fourth Edition", "4ED");
  }
}

module.exports = WallofIce;
