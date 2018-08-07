"use strict";
const Constants = require ("../../../Constants");
const DeadeyeTrackerBase = require("../setXLN/DeadeyeTracker");

class DeadeyeTracker extends DeadeyeTrackerBase {
  constructor (game) {
    super(game, "Deadeye Tracker", "Ixalan Promos", "PXLN");
  }
}

module.exports = DeadeyeTracker;
