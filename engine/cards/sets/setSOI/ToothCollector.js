"use strict";
const Constants = require ("../../../Constants");
const ToothCollectorBase = require("../setDDQ/ToothCollector");

class ToothCollector extends ToothCollectorBase {
  constructor(game) {
    super(game, "Tooth Collector", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ToothCollector;
