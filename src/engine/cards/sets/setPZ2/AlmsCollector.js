"use strict";
const Constants = require ("../../../Constants");
const AlmsCollectorBase = require("../setC17/AlmsCollector");

class AlmsCollector extends AlmsCollectorBase {
  constructor (game) {
    super(game, "Alms Collector", "You Make the Cube", "PZ2");
  }
}

module.exports = AlmsCollector;
