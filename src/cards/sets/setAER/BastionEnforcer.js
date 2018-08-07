"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BastionEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Bastion Enforcer", "Aether Revolt", "AER");
  }
}

module.exports = BastionEnforcer;
