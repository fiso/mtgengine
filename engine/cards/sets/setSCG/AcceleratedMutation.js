"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AcceleratedMutation extends Card {
  constructor(game) {
    super(game, "Accelerated Mutation", "Scourge", "SCG");
  }
}

module.exports = AcceleratedMutation;
