"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeapingLizardBase = require("../setHML/LeapingLizard.js");

class LeapingLizard extends LeapingLizardBase {
  constructor(game) {
    super(game, "Leaping Lizard", "Masters Edition II", "ME2");
  }
}

module.exports = LeapingLizard;
