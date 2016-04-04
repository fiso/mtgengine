"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AinokTrackerBase = require("../setKTK/AinokTracker.js");

class AinokTracker extends AinokTrackerBase {
  constructor(game) {
    super(game, "Ainok Tracker", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = AinokTracker;
