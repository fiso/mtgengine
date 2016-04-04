"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalMutation extends Card {
  constructor(game) {
    super(game, "Fatal Mutation", "Scourge", "SCG");
  }
}

module.exports = FatalMutation;
