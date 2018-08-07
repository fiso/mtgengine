"use strict";
const Constants = require ("../../../Constants");
const AnimateDeadBase = require("../setEMA/AnimateDead");

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, "Animate Dead", "Limited Edition Alpha", "LEA");
  }
}

module.exports = AnimateDead;
