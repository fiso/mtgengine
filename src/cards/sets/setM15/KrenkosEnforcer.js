"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrenkosEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Krenko's Enforcer", "Magic 2015 Core Set", "M15");
  }
}

module.exports = KrenkosEnforcer;
