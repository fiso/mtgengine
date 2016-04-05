"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollateralDamage extends UnimplementedCard {
  constructor(game) {
    super(game, "Collateral Damage", "Fate Reforged", "FRF");
  }
}

module.exports = CollateralDamage;
