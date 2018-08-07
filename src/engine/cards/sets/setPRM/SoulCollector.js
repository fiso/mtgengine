"use strict";
const Constants = require ("../../../Constants");
const SoulCollectorBase = require("../setTSB/SoulCollector");

class SoulCollector extends SoulCollectorBase {
  constructor (game) {
    super(game, "Soul Collector", "Magic Online Promos", "PRM");
  }
}

module.exports = SoulCollector;
