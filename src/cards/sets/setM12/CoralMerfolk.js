"use strict";
const Constants = require ("../../../Constants");
const CoralMerfolkBase = require("../setW17/CoralMerfolk");

class CoralMerfolk extends CoralMerfolkBase {
  constructor (game) {
    super(game, "Coral Merfolk", "Magic 2012", "M12");
  }
}

module.exports = CoralMerfolk;
