"use strict";
const Constants = require ("../../../Constants");
const EnduringRenewalBase = require("../setTSB/EnduringRenewal");

class EnduringRenewal extends EnduringRenewalBase {
  constructor (game) {
    super(game, "Enduring Renewal", "Ice Age", "ICE");
  }
}

module.exports = EnduringRenewal;
