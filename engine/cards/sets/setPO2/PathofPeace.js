"use strict";
const Constants = require ("../../../Constants");
const PathofPeaceBase = require("../setPOR/PathofPeace");

class PathofPeace extends PathofPeaceBase {
  constructor(game) {
    super(game, "Path of Peace", "Portal Second Age", "PO2");
  }
}

module.exports = PathofPeace;
