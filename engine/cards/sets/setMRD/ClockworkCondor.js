"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClockworkCondorBase = require("../setDDF/ClockworkCondor.js");

class ClockworkCondor extends ClockworkCondorBase {
  constructor(game) {
    super(game, "Clockwork Condor", "Mirrodin", "MRD");
  }
}

module.exports = ClockworkCondor;
