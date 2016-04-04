"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Fatal Mutation", "Scourge", "SCG");
  }
}

module.exports = FatalMutation;
