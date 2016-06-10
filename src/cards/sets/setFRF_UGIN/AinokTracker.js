"use strict";
const Constants = require ("../../../Constants");
const AinokTrackerBase = require("../setKTK/AinokTracker");

class AinokTracker extends AinokTrackerBase {
  constructor (game) {
    super(game, "Ainok Tracker", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = AinokTracker;
