"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PactofNegationBase = require("../setFUT/PactofNegation.js");

class PactofNegation extends PactofNegationBase {
  constructor(game) {
    super(game, "Pact of Negation", "Modern Masters", "MMA");
  }
}

module.exports = PactofNegation;
