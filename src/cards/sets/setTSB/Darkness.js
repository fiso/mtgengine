"use strict";
const Constants = require ("../../../Constants");
const DarknessBase = require("../setLEG/Darkness");

class Darkness extends DarknessBase {
  constructor(game) {
    super(game, "Darkness", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Darkness;
