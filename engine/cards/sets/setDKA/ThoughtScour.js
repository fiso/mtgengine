"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtScour extends Card {
  constructor(game) {
    super(game, "Thought Scour", "Dark Ascension", "DKA");
  }
}

module.exports = ThoughtScour;
