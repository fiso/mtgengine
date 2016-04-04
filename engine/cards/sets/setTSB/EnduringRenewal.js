"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnduringRenewalBase = require("../setICE/EnduringRenewal.js");

class EnduringRenewal extends EnduringRenewalBase {
  constructor(game) {
    super(game, "Enduring Renewal", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = EnduringRenewal;
