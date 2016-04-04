"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireMonitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Spire Monitor", "New Phyrexia", "NPH");
  }
}

module.exports = SpireMonitor;
