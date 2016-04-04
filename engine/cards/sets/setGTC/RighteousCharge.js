"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RighteousCharge extends Card {
  constructor(game) {
    super(game, "Righteous Charge", "Gatecrash", "GTC");
  }
}

module.exports = RighteousCharge;
