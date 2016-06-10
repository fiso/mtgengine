"use strict";
const Constants = require ("../../../Constants");
const ColossalMightBase = require("../setARB/ColossalMight");

class ColossalMight extends ColossalMightBase {
  constructor (game) {
    super(game, "Colossal Might", "Archenemy", "ARC");
  }
}

module.exports = ColossalMight;
