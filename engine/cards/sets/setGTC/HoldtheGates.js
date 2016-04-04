"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoldtheGates extends Card {
  constructor(game) {
    super(game, "Hold the Gates", "Gatecrash", "GTC");
  }
}

module.exports = HoldtheGates;
