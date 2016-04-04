"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinedSliverBase = require("../setH09/SpinedSliver.js");

class SpinedSliver extends SpinedSliverBase {
  constructor(game) {
    super(game, "Spined Sliver", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SpinedSliver;
