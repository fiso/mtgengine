"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Explosive Growth", "Invasion", "INV");
  }
}

module.exports = ExplosiveGrowth;
