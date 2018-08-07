"use strict";
const Constants = require ("../../../Constants");
const WallofFireBase = require("../setM15/WallofFire");

class WallofFire extends WallofFireBase {
  constructor (game) {
    super(game, "Wall of Fire", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = WallofFire;
