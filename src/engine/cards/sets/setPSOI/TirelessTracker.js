"use strict";
const Constants = require ("../../../Constants");
const TirelessTrackerBase = require("../setSOI/TirelessTracker");

class TirelessTracker extends TirelessTrackerBase {
  constructor (game) {
    super(game, "Tireless Tracker", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = TirelessTracker;
