"use strict";
const Constants = require ("../../../Constants");
const WallofAirBase = require("../set6ED/WallofAir");

class WallofAir extends WallofAirBase {
  constructor (game) {
    super(game, "Wall of Air", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofAir;
