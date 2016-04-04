"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaintedPact extends Card {
  constructor(game) {
    super(game, "Tainted Pact", "Odyssey", "ODY");
  }
}

module.exports = TaintedPact;
