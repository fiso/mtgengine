"use strict";
const Constants = require ("../../../Constants");
const StabWoundBase = require("../setDDM/StabWound");

class StabWound extends StabWoundBase {
  constructor (game) {
    super(game, "Stab Wound", "Magic 2015 Core Set", "M15");
  }
}

module.exports = StabWound;
