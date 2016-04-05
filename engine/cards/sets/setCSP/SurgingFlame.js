"use strict";
const Constants = require ("../../../Constants");
const SurgingFlameBase = require("../setpARL/SurgingFlame");

class SurgingFlame extends SurgingFlameBase {
  constructor(game) {
    super(game, "Surging Flame", "Coldsnap", "CSP");
  }
}

module.exports = SurgingFlame;
