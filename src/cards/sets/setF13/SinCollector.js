"use strict";
const Constants = require ("../../../Constants");
const SinCollectorBase = require("../setMM3/SinCollector");

class SinCollector extends SinCollectorBase {
  constructor (game) {
    super(game, "Sin Collector", "Friday Night Magic 2013", "F13");
  }
}

module.exports = SinCollector;
