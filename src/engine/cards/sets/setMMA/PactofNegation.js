"use strict";
const Constants = require ("../../../Constants");
const PactofNegationBase = require("../setA25/PactofNegation");

class PactofNegation extends PactofNegationBase {
  constructor (game) {
    super(game, "Pact of Negation", "Modern Masters", "MMA");
  }
}

module.exports = PactofNegation;
