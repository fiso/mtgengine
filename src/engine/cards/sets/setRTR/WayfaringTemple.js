"use strict";
const Constants = require ("../../../Constants");
const WayfaringTempleBase = require("../setMM3/WayfaringTemple");

class WayfaringTemple extends WayfaringTempleBase {
  constructor (game) {
    super(game, "Wayfaring Temple", "Return to Ravnica", "RTR");
  }
}

module.exports = WayfaringTemple;
