"use strict";
const Constants = require ("../../../Constants");
const LeapingLizardBase = require("../setME2/LeapingLizard");

class LeapingLizard extends LeapingLizardBase {
  constructor (game) {
    super(game, "Leaping Lizard", "Homelands", "HML");
  }
}

module.exports = LeapingLizard;
