"use strict";
const Constants = require ("../../../Constants");
const CoralMerfolkBase = require("../setM10/CoralMerfolk");

class CoralMerfolk extends CoralMerfolkBase {
  constructor (game) {
    super(game, "Coral Merfolk", "Urza's Saga", "USG");
  }
}

module.exports = CoralMerfolk;
