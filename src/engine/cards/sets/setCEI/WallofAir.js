"use strict";
const Constants = require ("../../../Constants");
const WallofAirBase = require("../set10E/WallofAir");

class WallofAir extends WallofAirBase {
  constructor (game) {
    super(game, "Wall of Air", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = WallofAir;
