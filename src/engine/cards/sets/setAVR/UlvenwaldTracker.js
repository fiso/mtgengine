"use strict";
const Constants = require ("../../../Constants");
const UlvenwaldTrackerBase = require("../setMM3/UlvenwaldTracker");

class UlvenwaldTracker extends UlvenwaldTrackerBase {
  constructor (game) {
    super(game, "Ulvenwald Tracker", "Avacyn Restored", "AVR");
  }
}

module.exports = UlvenwaldTracker;
