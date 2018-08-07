"use strict";
const Constants = require ("../../../Constants");
const WallofAirBase = require("../set10E/WallofAir");

class WallofAir extends WallofAirBase {
  constructor (game) {
    super(game, "Wall of Air", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = WallofAir;
