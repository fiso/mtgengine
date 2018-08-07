"use strict";
const Constants = require ("../../../Constants");
const SinCollectorBase = require("../setMM3/SinCollector");

class SinCollector extends SinCollectorBase {
  constructor (game) {
    super(game, "Sin Collector", "Dragon's Maze", "DGM");
  }
}

module.exports = SinCollector;
