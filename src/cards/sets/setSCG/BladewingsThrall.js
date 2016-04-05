"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladewingsThrall extends UnimplementedCard {
  constructor(game) {
    super(game, "Bladewing's Thrall", "Scourge", "SCG");
  }
}

module.exports = BladewingsThrall;
