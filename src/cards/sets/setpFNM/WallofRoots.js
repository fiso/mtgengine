"use strict";
const Constants = require ("../../../Constants");
const WallofRootsBase = require("../setARC/WallofRoots");

class WallofRoots extends WallofRootsBase {
  constructor(game) {
    super(game, "Wall of Roots", "Friday Night Magic", "pFNM");
  }
}

module.exports = WallofRoots;
