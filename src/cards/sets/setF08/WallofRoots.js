"use strict";
const Constants = require ("../../../Constants");
const WallofRootsBase = require("../setIMA/WallofRoots");

class WallofRoots extends WallofRootsBase {
  constructor (game) {
    super(game, "Wall of Roots", "Friday Night Magic 2008", "F08");
  }
}

module.exports = WallofRoots;
