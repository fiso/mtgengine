"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalSurge extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Surge", "Avacyn Restored", "AVR");
  }
}

module.exports = PrimalSurge;
