"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrackerBase = require("../setME3/Tracker.js");

class Tracker extends TrackerBase {
  constructor(game) {
    super(game, "Tracker", "The Dark", "DRK");
  }
}

module.exports = Tracker;
