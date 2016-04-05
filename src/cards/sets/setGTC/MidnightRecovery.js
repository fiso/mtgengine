"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightRecovery extends UnimplementedCard {
  constructor(game) {
    super(game, "Midnight Recovery", "Gatecrash", "GTC");
  }
}

module.exports = MidnightRecovery;
