"use strict";
const Constants = require ("../../../Constants");
const GroveoftheGuardianBase = require("../setRTR/GroveoftheGuardian");

class GroveoftheGuardian extends GroveoftheGuardianBase {
  constructor (game) {
    super(game, "Grove of the Guardian", "Return to Ravnica Promos", "PRTR");
  }
}

module.exports = GroveoftheGuardian;
