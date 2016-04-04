"use strict";
const Constants = require ("../../../Constants");
const PulseTrackerBase = require("../setDDM/PulseTracker");

class PulseTracker extends PulseTrackerBase {
  constructor(game) {
    super(game, "Pulse Tracker", "Worldwake", "WWK");
  }
}

module.exports = PulseTracker;
