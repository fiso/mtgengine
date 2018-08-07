"use strict";
const Constants = require ("../../../Constants");
const ClockworkSteedBase = require("../setME2/ClockworkSteed");

class ClockworkSteed extends ClockworkSteedBase {
  constructor (game) {
    super(game, "Clockwork Steed", "Homelands", "HML");
  }
}

module.exports = ClockworkSteed;
