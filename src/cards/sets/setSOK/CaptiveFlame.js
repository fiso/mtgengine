"use strict";
const Constants = require ("../../../Constants");
const CaptiveFlameBase = require("../setDDG/CaptiveFlame");

class CaptiveFlame extends CaptiveFlameBase {
  constructor(game) {
    super(game, "Captive Flame", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CaptiveFlame;
