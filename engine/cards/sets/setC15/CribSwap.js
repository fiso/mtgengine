"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CribSwap extends UnimplementedCard {
  constructor(game) {
    super(game, "Crib Swap", "Commander 2015", "C15");
  }
}

module.exports = CribSwap;
