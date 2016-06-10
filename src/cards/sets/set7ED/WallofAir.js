"use strict";
const Constants = require ("../../../Constants");
const WallofAirBase = require("../set6ED/WallofAir");

class WallofAir extends WallofAirBase {
  constructor (game) {
    super(game, "Wall of Air", "Seventh Edition", "7ED");
  }
}

module.exports = WallofAir;
