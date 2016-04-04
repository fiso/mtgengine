"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasMerchant extends Card {
  constructor(game) {
    super(game, "Talas Merchant", "Portal Second Age", "PO2");
  }
}

module.exports = TalasMerchant;
