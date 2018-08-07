"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrideGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Pride Guardian", "Conspiracy", "CNS");
  }
}

module.exports = PrideGuardian;
