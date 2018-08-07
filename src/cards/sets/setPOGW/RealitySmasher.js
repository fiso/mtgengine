"use strict";
const Constants = require ("../../../Constants");
const RealitySmasherBase = require("../setOGW/RealitySmasher");

class RealitySmasher extends RealitySmasherBase {
  constructor (game) {
    super(game, "Reality Smasher", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = RealitySmasher;
