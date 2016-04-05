"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticEnforcer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Enforcer", "Odyssey", "ODY");
  }
}

module.exports = MysticEnforcer;
