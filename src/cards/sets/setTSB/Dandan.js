"use strict";
const Constants = require ("../../../Constants");
const DandanBase = require("../setARN/Dandan");

class Dandan extends DandanBase {
  constructor(game) {
    super(game, "Dandân", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Dandan;
