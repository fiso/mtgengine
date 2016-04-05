"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtScour extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Scour", "Dark Ascension", "DKA");
  }
}

module.exports = ThoughtScour;
