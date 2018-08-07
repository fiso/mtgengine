"use strict";
const Constants = require ("../../../Constants");
const RageReflectionBase = require("../setDPA/RageReflection");

class RageReflection extends RageReflectionBase {
  constructor (game) {
    super(game, "Rage Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = RageReflection;
