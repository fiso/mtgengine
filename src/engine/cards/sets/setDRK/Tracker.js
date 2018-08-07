"use strict";
const Constants = require ("../../../Constants");
const TrackerBase = require("../setME3/Tracker");

class Tracker extends TrackerBase {
  constructor (game) {
    super(game, "Tracker", "The Dark", "DRK");
  }
}

module.exports = Tracker;
