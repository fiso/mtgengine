"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishHonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Honor Guard", "Dominaria", "DOM");
  }
}

module.exports = BenalishHonorGuard;
