"use strict";
const Constants = require ("../../../Constants");
const AnimationModuleBase = require("../setKLD/AnimationModule");

class AnimationModule extends AnimationModuleBase {
  constructor (game) {
    super(game, "Animation Module", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AnimationModule;
