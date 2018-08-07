"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Unstable Mutation", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = UnstableMutation;
