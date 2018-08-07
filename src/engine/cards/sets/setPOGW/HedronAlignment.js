"use strict";
const Constants = require ("../../../Constants");
const HedronAlignmentBase = require("../setOGW/HedronAlignment");

class HedronAlignment extends HedronAlignmentBase {
  constructor (game) {
    super(game, "Hedron Alignment", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = HedronAlignment;
