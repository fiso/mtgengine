"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtDevourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Devourer", "Odyssey", "ODY");
  }
}

module.exports = ThoughtDevourer;
