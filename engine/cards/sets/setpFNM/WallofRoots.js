"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofRootsBase = require("../setARC/WallofRoots.js");

class WallofRoots extends WallofRootsBase {
  constructor(game) {
    super(game, "Wall of Roots", "Friday Night Magic", "pFNM");
  }
}

module.exports = WallofRoots;
