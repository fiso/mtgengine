"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExecutionersSwing extends Card {
  constructor(game) {
    super(game, "Executioner's Swing", "Gatecrash", "GTC");
  }
}

module.exports = ExecutionersSwing;
