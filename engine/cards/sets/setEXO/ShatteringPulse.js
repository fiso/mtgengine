"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteringPulse extends UnimplementedCard {
  constructor(game) {
    super(game, "Shattering Pulse", "Exodus", "EXO");
  }
}

module.exports = ShatteringPulse;
