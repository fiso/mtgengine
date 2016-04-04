"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollateralDamage extends Card {
  constructor(game) {
    super(game, "Collateral Damage", "Fate Reforged", "FRF");
  }
}

module.exports = CollateralDamage;
