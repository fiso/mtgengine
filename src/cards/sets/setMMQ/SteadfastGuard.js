"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadfastGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfast Guard", "Mercadian Masques", "MMQ");
  }
}

module.exports = SteadfastGuard;
