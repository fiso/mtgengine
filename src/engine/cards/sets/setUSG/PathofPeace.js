"use strict";
const Constants = require ("../../../Constants");
const PathofPeaceBase = require("../setA25/PathofPeace");

class PathofPeace extends PathofPeaceBase {
  constructor (game) {
    super(game, "Path of Peace", "Urza's Saga", "USG");
  }
}

module.exports = PathofPeace;
