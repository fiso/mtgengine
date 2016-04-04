"use strict";
const Constants = require ("../../../Constants");
const SinCollectorBase = require("../setDGM/SinCollector");

class SinCollector extends SinCollectorBase {
  constructor(game) {
    super(game, "Sin Collector", "Friday Night Magic", "pFNM");
  }
}

module.exports = SinCollector;
