"use strict";
const Constants = require ("../../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead");

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, "Animate Dead", "Fifth Edition", "5ED");
  }
}

module.exports = AnimateDead;
