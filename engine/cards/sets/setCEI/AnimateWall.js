"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateWallBase = require("../set6ED/AnimateWall.js");

class AnimateWall extends AnimateWallBase {
  constructor(game) {
    super(game, "Animate Wall", "International Collector's Edition", "CEI");
  }
}

module.exports = AnimateWall;
