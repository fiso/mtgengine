"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalasMerchant extends UnimplementedCard {
  constructor (game) {
    super(game, "Talas Merchant", "Portal Second Age", "P02");
  }
}

module.exports = TalasMerchant;
