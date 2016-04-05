"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerchantShip extends UnimplementedCard {
  constructor(game) {
    super(game, "Merchant Ship", "Arabian Nights", "ARN");
  }
}

module.exports = MerchantShip;
