"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredFoundry extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Foundry", "Gatecrash", "GTC");
  }
}

module.exports = SacredFoundry;
