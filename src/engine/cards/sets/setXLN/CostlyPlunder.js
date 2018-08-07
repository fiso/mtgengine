"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CostlyPlunder extends UnimplementedCard {
  constructor (game) {
    super(game, "Costly Plunder", "Ixalan", "XLN");
  }
}

module.exports = CostlyPlunder;
