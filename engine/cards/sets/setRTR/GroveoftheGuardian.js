"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroveoftheGuardianBase = require("../setpPRE/GroveoftheGuardian.js");

class GroveoftheGuardian extends GroveoftheGuardianBase {
  constructor(game) {
    super(game, "Grove of the Guardian", "Return to Ravnica", "RTR");
  }
}

module.exports = GroveoftheGuardian;
