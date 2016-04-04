"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerchantShip extends Card {
  constructor(game) {
    super(game, "Merchant Ship", "Arabian Nights", "ARN");
  }
}

module.exports = MerchantShip;
