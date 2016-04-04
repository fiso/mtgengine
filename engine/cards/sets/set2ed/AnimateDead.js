"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnimateDeadBase = require("../setCED/AnimateDead.js");

class AnimateDead extends AnimateDeadBase {
  constructor(game) {
    super(game, "Animate Dead", "Unlimited Edition", "2ED");
  }
}

module.exports = AnimateDead;
