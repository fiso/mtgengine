"use strict";
const Constants = require ("../../../Constants");
const RhoxWarMonkBase = require("../setMM3/RhoxWarMonk");

class RhoxWarMonk extends RhoxWarMonkBase {
  constructor (game) {
    super(game, "Rhox War Monk", "Magic Online Promos", "PRM");
  }
}

module.exports = RhoxWarMonk;
