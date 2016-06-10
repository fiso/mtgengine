"use strict";
const Constants = require ("../../../Constants");
const WallofIceBase = require("../setCED/WallofIce");

class WallofIce extends WallofIceBase {
  constructor (game) {
    super(game, "Wall of Ice", "Limited Edition Beta", "LEB");
  }
}

module.exports = WallofIce;
