"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonorGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Honor Guard", "Tenth Edition", "10E");
  }
}

module.exports = HonorGuard;
