"use strict";
const Constants = require ("../../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead");

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, "Animate Dead", "Eternal Masters", "EMA");
  }
}

module.exports = AnimateDead;
