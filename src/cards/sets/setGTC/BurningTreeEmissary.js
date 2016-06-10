"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningTreeEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Burning-Tree Emissary", "Gatecrash", "GTC");
  }
}

module.exports = BurningTreeEmissary;
