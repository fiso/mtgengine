"use strict";
const Constants = require ("../../../Constants");
const PathofPeaceBase = require("../setPOR/PathofPeace");

class PathofPeace extends PathofPeaceBase {
  constructor (game) {
    super(game, "Path of Peace", "Starter 1999", "S99");
  }
}

module.exports = PathofPeace;
