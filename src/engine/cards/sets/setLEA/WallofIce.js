"use strict";
const Constants = require ("../../../Constants");
const WallofIceBase = require("../set4ED/WallofIce");

class WallofIce extends WallofIceBase {
  constructor (game) {
    super(game, "Wall of Ice", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofIce;
