"use strict";
const Constants = require ("../../../Constants");
const ThoughtReflectionBase = require("../setC15/ThoughtReflection");

class ThoughtReflection extends ThoughtReflectionBase {
  constructor (game) {
    super(game, "Thought Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = ThoughtReflection;
