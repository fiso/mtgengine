"use strict";
const Constants = require ("../../../Constants");
const WallofFireBase = require("../setM15/WallofFire");

class WallofFire extends WallofFireBase {
  constructor (game) {
    super(game, "Wall of Fire", "Magic 2010", "M10");
  }
}

module.exports = WallofFire;
