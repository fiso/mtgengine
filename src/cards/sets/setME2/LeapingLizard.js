"use strict";
const Constants = require ("../../../Constants");
const LeapingLizardBase = require("../setHML/LeapingLizard");

class LeapingLizard extends LeapingLizardBase {
  constructor (game) {
    super(game, "Leaping Lizard", "Masters Edition II", "ME2");
  }
}

module.exports = LeapingLizard;
