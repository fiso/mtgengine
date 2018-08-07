"use strict";
const Constants = require ("../../../Constants");
const GroveoftheGuardianBase = require("../setRTR/GroveoftheGuardian");

class GroveoftheGuardian extends GroveoftheGuardianBase {
  constructor (game) {
    super(game, "Grove of the Guardian", "Magic Online Promos", "PRM");
  }
}

module.exports = GroveoftheGuardian;
