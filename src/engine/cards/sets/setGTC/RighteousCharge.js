"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousCharge extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Charge", "Gatecrash", "GTC");
  }
}

module.exports = RighteousCharge;
