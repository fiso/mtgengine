"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setATH/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor(game) {
    super(game, "Mogg Fanatic", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = MoggFanatic;
