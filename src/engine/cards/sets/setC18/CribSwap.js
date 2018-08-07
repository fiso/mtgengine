"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CribSwap extends UnimplementedCard {
  constructor (game) {
    super(game, "Crib Swap", "Commander 2018", "C18");
  }
}

module.exports = CribSwap;
