"use strict";
const Constants = require ("../../../Constants");
const AvoidFateBase = require("../setLEG/AvoidFate");

class AvoidFate extends AvoidFateBase {
  constructor(game) {
    super(game, "Avoid Fate", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = AvoidFate;
