"use strict";
const Constants = require ("../../../Constants");
const RiverMerfolkBase = require("../setFEM/RiverMerfolk");

class RiverMerfolk extends RiverMerfolkBase {
  constructor (game) {
    super(game, "River Merfolk", "Masters Edition", "MED");
  }
}

module.exports = RiverMerfolk;
