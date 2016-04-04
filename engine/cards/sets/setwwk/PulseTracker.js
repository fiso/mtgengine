"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PulseTrackerBase = require("../setDDM/PulseTracker.js");

class PulseTracker extends PulseTrackerBase {
  constructor(game) {
    super(game, "Pulse Tracker", "Worldwake", "WWK");
  }
}

module.exports = PulseTracker;
