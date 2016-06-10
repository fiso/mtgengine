"use strict";
const Constants = require ("../../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead");

class AnimateDead extends AnimateDeadBase {
  constructor (game) {
    super(game, "Animate Dead", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = AnimateDead;
