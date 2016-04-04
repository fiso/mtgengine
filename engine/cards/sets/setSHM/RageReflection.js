"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RageReflectionBase = require("../setDPA/RageReflection.js");

class RageReflection extends RageReflectionBase {
  constructor(game) {
    super(game, "Rage Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = RageReflection;
