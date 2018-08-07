"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Charge", "Onslaught", "ONS");
  }
}

module.exports = AetherCharge;
