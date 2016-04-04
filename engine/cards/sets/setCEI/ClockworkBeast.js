"use strict";
const Constants = require ("../../../Constants");
const ClockworkBeastBase = require("../setBTD/ClockworkBeast");

class ClockworkBeast extends ClockworkBeastBase {
  constructor(game) {
    super(game, "Clockwork Beast", "International Collector's Edition", "CEI");
  }
}

module.exports = ClockworkBeast;
