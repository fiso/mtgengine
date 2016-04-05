"use strict";
const Constants = require ("../../../Constants");
const ClockworkSteedBase = require("../set5ED/ClockworkSteed");

class ClockworkSteed extends ClockworkSteedBase {
  constructor(game) {
    super(game, "Clockwork Steed", "Masters Edition II", "ME2");
  }
}

module.exports = ClockworkSteed;
