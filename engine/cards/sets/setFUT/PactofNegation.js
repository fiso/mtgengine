"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PactofNegation extends Card {
  constructor(game) {
    super(game, "Pact of Negation", "Future Sight", "FUT");
  }
}

module.exports = PactofNegation;
