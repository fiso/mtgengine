"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionHonorGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Coalition Honor Guard", "Apocalypse", "APC");
  }
}

module.exports = CoalitionHonorGuard;
