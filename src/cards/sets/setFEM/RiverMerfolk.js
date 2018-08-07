"use strict";
const Constants = require ("../../../Constants");
const RiverMerfolkBase = require("../setMED/RiverMerfolk");

class RiverMerfolk extends RiverMerfolkBase {
  constructor (game) {
    super(game, "River Merfolk", "Fallen Empires", "FEM");
  }
}

module.exports = RiverMerfolk;
