"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VentSentinel extends UnimplementedCard {
  constructor(game) {
    super(game, "Vent Sentinel", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VentSentinel;
