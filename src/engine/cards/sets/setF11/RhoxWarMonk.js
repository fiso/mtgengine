"use strict";
const Constants = require ("../../../Constants");
const RhoxWarMonkBase = require("../setMM3/RhoxWarMonk");

class RhoxWarMonk extends RhoxWarMonkBase {
  constructor (game) {
    super(game, "Rhox War Monk", "Friday Night Magic 2011", "F11");
  }
}

module.exports = RhoxWarMonk;
