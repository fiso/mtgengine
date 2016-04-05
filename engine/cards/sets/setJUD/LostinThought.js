"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostinThought extends UnimplementedCard {
  constructor(game) {
    super(game, "Lost in Thought", "Judgment", "JUD");
  }
}

module.exports = LostinThought;
