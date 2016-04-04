"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofIceBase = require("../setCED/WallofIce.js");

class WallofIce extends WallofIceBase {
  constructor(game) {
    super(game, "Wall of Ice", "Fourth Edition", "4ED");
  }
}

module.exports = WallofIce;
