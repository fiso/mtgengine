"use strict";
const Constants = require ("../../../Constants");
const WallofIceBase = require("../setCED/WallofIce");

class WallofIce extends WallofIceBase {
  constructor (game) {
    super(game, "Wall of Ice", "Revised Edition", "3ED");
  }
}

module.exports = WallofIce;
