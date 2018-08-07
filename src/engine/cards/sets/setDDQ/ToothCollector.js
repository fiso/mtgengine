"use strict";
const Constants = require ("../../../Constants");
const ToothCollectorBase = require("../setSOI/ToothCollector");

class ToothCollector extends ToothCollectorBase {
  constructor (game) {
    super(game, "Tooth Collector", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ToothCollector;
