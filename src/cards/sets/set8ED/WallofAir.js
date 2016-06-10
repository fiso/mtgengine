"use strict";
const Constants = require ("../../../Constants");
const WallofAirBase = require("../set6ED/WallofAir");

class WallofAir extends WallofAirBase {
  constructor (game) {
    super(game, "Wall of Air", "Eighth Edition", "8ED");
  }
}

module.exports = WallofAir;
