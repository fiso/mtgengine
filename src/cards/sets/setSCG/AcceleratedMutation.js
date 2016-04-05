"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcceleratedMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Accelerated Mutation", "Scourge", "SCG");
  }
}

module.exports = AcceleratedMutation;
