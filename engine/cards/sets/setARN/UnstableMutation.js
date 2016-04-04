"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Unstable Mutation", "Arabian Nights", "ARN");
  }
}

module.exports = UnstableMutation;
