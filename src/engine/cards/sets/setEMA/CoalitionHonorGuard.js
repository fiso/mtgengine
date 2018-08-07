"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionHonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Coalition Honor Guard", "Eternal Masters", "EMA");
  }
}

module.exports = CoalitionHonorGuard;
