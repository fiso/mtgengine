"use strict";
const Constants = require ("../../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead");

class AnimateDead extends AnimateDeadBase {
  constructor(game) {
    super(game, "Animate Dead", "International Collector's Edition", "CEI");
  }
}

module.exports = AnimateDead;
