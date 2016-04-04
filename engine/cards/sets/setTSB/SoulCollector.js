"use strict";
const Constants = require ("../../../Constants");
const SoulCollectorBase = require("../setpPRE/SoulCollector");

class SoulCollector extends SoulCollectorBase {
  constructor(game) {
    super(game, "Soul Collector", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = SoulCollector;
