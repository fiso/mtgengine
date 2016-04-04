"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofStoneBase = require("../setCED/WallofStone.js");

class WallofStone extends WallofStoneBase {
  constructor(game) {
    super(game, "Wall of Stone", "International Collector's Edition", "CEI");
  }
}

module.exports = WallofStone;
