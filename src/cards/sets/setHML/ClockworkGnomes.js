"use strict";
const Constants = require ("../../../Constants");
const ClockworkGnomesBase = require("../setME4/ClockworkGnomes");

class ClockworkGnomes extends ClockworkGnomesBase {
  constructor (game) {
    super(game, "Clockwork Gnomes", "Homelands", "HML");
  }
}

module.exports = ClockworkGnomes;
