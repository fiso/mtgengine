"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillingGlare extends UnimplementedCard {
  constructor(game) {
    super(game, "Killing Glare", "Gatecrash", "GTC");
  }
}

module.exports = KillingGlare;
