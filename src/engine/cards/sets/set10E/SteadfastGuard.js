"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadfastGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfast Guard", "Tenth Edition", "10E");
  }
}

module.exports = SteadfastGuard;
