"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead.js");

class AnimateDead extends AnimateDeadBase {
  constructor(game) {
    super(game, "Animate Dead", "Vintage Masters", "VMA");
  }
}

module.exports = AnimateDead;
