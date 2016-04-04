"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillingGlare extends Card {
  constructor(game) {
    super(game, "Killing Glare", "Gatecrash", "GTC");
  }
}

module.exports = KillingGlare;
