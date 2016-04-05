"use strict";
const Constants = require ("../../../Constants");
const EnduringRenewalBase = require("../setICE/EnduringRenewal");

class EnduringRenewal extends EnduringRenewalBase {
  constructor(game) {
    super(game, "Enduring Renewal", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = EnduringRenewal;
