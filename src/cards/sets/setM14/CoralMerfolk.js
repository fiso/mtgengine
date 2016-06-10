"use strict";
const Constants = require ("../../../Constants");
const CoralMerfolkBase = require("../setM10/CoralMerfolk");

class CoralMerfolk extends CoralMerfolkBase {
  constructor (game) {
    super(game, "Coral Merfolk", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CoralMerfolk;
