"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SurgingFlameBase = require("../setpARL/SurgingFlame.js");

class SurgingFlame extends SurgingFlameBase {
  constructor(game) {
    super(game, "Surging Flame", "Coldsnap", "CSP");
  }
}

module.exports = SurgingFlame;
