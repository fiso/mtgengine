"use strict";
const Constants = require ("../../../Constants");
const WallofFireBase = require("../setM15/WallofFire");

class WallofFire extends WallofFireBase {
  constructor (game) {
    super(game, "Wall of Fire", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofFire;
