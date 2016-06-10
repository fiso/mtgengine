"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PactofNegation extends UnimplementedCard {
  constructor (game) {
    super(game, "Pact of Negation", "Future Sight", "FUT");
  }
}

module.exports = PactofNegation;
