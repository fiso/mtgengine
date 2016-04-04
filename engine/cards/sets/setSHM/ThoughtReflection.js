"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtReflectionBase = require("../setC15/ThoughtReflection.js");

class ThoughtReflection extends ThoughtReflectionBase {
  constructor(game) {
    super(game, "Thought Reflection", "Shadowmoor", "SHM");
  }
}

module.exports = ThoughtReflection;
