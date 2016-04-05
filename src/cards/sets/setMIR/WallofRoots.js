"use strict";
const Constants = require ("../../../Constants");
const WallofRootsBase = require("../setARC/WallofRoots");

class WallofRoots extends WallofRootsBase {
  constructor(game) {
    super(game, "Wall of Roots", "Mirage", "MIR");
  }
}

module.exports = WallofRoots;
