"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoldtheGates extends UnimplementedCard {
  constructor(game) {
    super(game, "Hold the Gates", "Gatecrash", "GTC");
  }
}

module.exports = HoldtheGates;
