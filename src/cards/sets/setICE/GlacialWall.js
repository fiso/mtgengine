"use strict";
const Constants = require ("../../../Constants");
const GlacialWallBase = require("../set6ED/GlacialWall");

class GlacialWall extends GlacialWallBase {
  constructor(game) {
    super(game, "Glacial Wall", "Ice Age", "ICE");
  }
}

module.exports = GlacialWall;
