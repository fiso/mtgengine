"use strict";
const Constants = require ("../../../Constants");
const CoralMerfolkBase = require("../setW17/CoralMerfolk");

class CoralMerfolk extends CoralMerfolkBase {
  constructor (game) {
    super(game, "Coral Merfolk", "Seventh Edition", "7ED");
  }
}

module.exports = CoralMerfolk;
