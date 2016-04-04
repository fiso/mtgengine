"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlaughterPact extends Card {
  constructor(game) {
    super(game, "Slaughter Pact", "Future Sight", "FUT");
  }
}

module.exports = SlaughterPact;
