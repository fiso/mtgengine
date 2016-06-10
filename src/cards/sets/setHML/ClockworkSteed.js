"use strict";
const Constants = require ("../../../Constants");
const ClockworkSteedBase = require("../set5ED/ClockworkSteed");

class ClockworkSteed extends ClockworkSteedBase {
  constructor (game) {
    super(game, "Clockwork Steed", "Homelands", "HML");
  }
}

module.exports = ClockworkSteed;
