"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StabWoundBase = require("../setDDM/StabWound.js");

class StabWound extends StabWoundBase {
  constructor(game) {
    super(game, "Stab Wound", "Return to Ravnica", "RTR");
  }
}

module.exports = StabWound;
