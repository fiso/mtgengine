"use strict";
const Constants = require ("../../../Constants");
const MwonvuliBeastTrackerBase = require("../setM13/MwonvuliBeastTracker");

class MwonvuliBeastTracker extends MwonvuliBeastTrackerBase {
  constructor(game) {
    super(game, "Mwonvuli Beast Tracker", "Magic Game Day", "pMGD");
  }
}

module.exports = MwonvuliBeastTracker;
