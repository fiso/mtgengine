"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptiveFlameBase = require("../setDDG/CaptiveFlame.js");

class CaptiveFlame extends CaptiveFlameBase {
  constructor(game) {
    super(game, "Captive Flame", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CaptiveFlame;
