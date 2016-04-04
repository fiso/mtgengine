"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtDevourer extends Card {
  constructor(game) {
    super(game, "Thought Devourer", "Odyssey", "ODY");
  }
}

module.exports = ThoughtDevourer;
