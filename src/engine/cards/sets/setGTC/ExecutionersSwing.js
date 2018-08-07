"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExecutionersSwing extends UnimplementedCard {
  constructor (game) {
    super(game, "Executioner's Swing", "Gatecrash", "GTC");
  }
}

module.exports = ExecutionersSwing;
