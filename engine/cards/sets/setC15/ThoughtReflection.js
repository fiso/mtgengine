"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtReflection extends Card {
  constructor(game) {
    super(game, "Thought Reflection", "Commander 2015", "C15");
  }
}

module.exports = ThoughtReflection;
