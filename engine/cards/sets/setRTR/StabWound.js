"use strict";
const Constants = require ("../../../Constants");
const StabWoundBase = require("../setDDM/StabWound");

class StabWound extends StabWoundBase {
  constructor(game) {
    super(game, "Stab Wound", "Return to Ravnica", "RTR");
  }
}

module.exports = StabWound;
