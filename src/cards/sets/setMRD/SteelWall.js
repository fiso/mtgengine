"use strict";
const Constants = require ("../../../Constants");
const SteelWallBase = require("../setDDF/SteelWall");

class SteelWall extends SteelWallBase {
  constructor (game) {
    super(game, "Steel Wall", "Mirrodin", "MRD");
  }
}

module.exports = SteelWall;
