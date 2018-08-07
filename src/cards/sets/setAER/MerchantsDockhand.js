"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerchantsDockhand extends UnimplementedCard {
  constructor (game) {
    super(game, "Merchant's Dockhand", "Aether Revolt", "AER");
  }
}

module.exports = MerchantsDockhand;
