"use strict";
const Constants = require ("../../../Constants");
const WallofMulchBase = require("../setM15/WallofMulch");

class WallofMulch extends WallofMulchBase {
  constructor (game) {
    super(game, "Wall of Mulch", "Onslaught", "ONS");
  }
}

module.exports = WallofMulch;
