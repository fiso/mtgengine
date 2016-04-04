"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlacialWallBase = require("../set6ED/GlacialWall.js");

class GlacialWall extends GlacialWallBase {
  constructor(game) {
    super(game, "Glacial Wall", "Seventh Edition", "7ED");
  }
}

module.exports = GlacialWall;
