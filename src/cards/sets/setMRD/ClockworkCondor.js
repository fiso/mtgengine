"use strict";
const Constants = require ("../../../Constants");
const ClockworkCondorBase = require("../setDDF/ClockworkCondor");

class ClockworkCondor extends ClockworkCondorBase {
  constructor (game) {
    super(game, "Clockwork Condor", "Mirrodin", "MRD");
  }
}

module.exports = ClockworkCondor;
