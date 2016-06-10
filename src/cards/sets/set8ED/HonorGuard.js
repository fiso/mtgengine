"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Honor Guard", "Eighth Edition", "8ED");
  }
}

module.exports = HonorGuard;
