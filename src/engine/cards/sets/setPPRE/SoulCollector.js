"use strict";
const Constants = require ("../../../Constants");
const SoulCollectorBase = require("../setTSB/SoulCollector");

class SoulCollector extends SoulCollectorBase {
  constructor (game) {
    super(game, "Soul Collector", "Prerelease Events", "PPRE");
  }
}

module.exports = SoulCollector;
