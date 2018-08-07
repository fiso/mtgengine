"use strict";
const Constants = require ("../../../Constants");
const WallofRootsBase = require("../setIMA/WallofRoots");

class WallofRoots extends WallofRootsBase {
  constructor (game) {
    super(game, "Wall of Roots", "World Championship Decks 1998", "WC98");
  }
}

module.exports = WallofRoots;
