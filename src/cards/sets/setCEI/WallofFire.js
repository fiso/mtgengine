"use strict";
const Constants = require ("../../../Constants");
const WallofFireBase = require("../set6ED/WallofFire");

class WallofFire extends WallofFireBase {
  constructor (game) {
    super(game, "Wall of Fire", "International Collector's Edition", "CEI");
  }
}

module.exports = WallofFire;
