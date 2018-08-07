"use strict";
const Constants = require ("../../../Constants");
const PathofAncestryBase = require("../setC17/PathofAncestry");

class PathofAncestry extends PathofAncestryBase {
  constructor (game) {
    super(game, "Path of Ancestry", "You Make the Cube", "PZ2");
  }
}

module.exports = PathofAncestry;
