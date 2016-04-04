"use strict";
const Constants = require ("../../../Constants");
const WallofRootsBase = require("../setARC/WallofRoots");

class WallofRoots extends WallofRootsBase {
  constructor(game) {
    super(game, "Wall of Roots", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = WallofRoots;
