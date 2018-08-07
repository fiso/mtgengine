"use strict";
const Constants = require ("../../../Constants");
const GlacialWallBase = require("../setEMA/GlacialWall");

class GlacialWall extends GlacialWallBase {
  constructor (game) {
    super(game, "Glacial Wall", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GlacialWall;
