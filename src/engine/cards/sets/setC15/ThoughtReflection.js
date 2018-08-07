"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtReflection extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Reflection", "Commander 2015", "C15");
  }
}

module.exports = ThoughtReflection;
