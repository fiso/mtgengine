"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PactoftheTitan extends Card {
  constructor(game) {
    super(game, "Pact of the Titan", "Future Sight", "FUT");
  }
}

module.exports = PactoftheTitan;
