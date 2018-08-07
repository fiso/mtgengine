"use strict";
const Constants = require ("../../../Constants");
const SinCollectorBase = require("../setMM3/SinCollector");

class SinCollector extends SinCollectorBase {
  constructor (game) {
    super(game, "Sin Collector", "Magic Online Promos", "PRM");
  }
}

module.exports = SinCollector;
