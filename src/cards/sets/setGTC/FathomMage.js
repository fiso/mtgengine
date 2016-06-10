"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Fathom Mage", "Gatecrash", "GTC");
  }
}

module.exports = FathomMage;
