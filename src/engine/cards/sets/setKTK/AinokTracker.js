"use strict";
const Constants = require ("../../../Constants");
const AinokTrackerBase = require("../setUGIN/AinokTracker");

class AinokTracker extends AinokTrackerBase {
  constructor (game) {
    super(game, "Ainok Tracker", "Khans of Tarkir", "KTK");
  }
}

module.exports = AinokTracker;
