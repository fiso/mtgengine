"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodMonitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Brood Monitor", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BroodMonitor;
