"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BazaarKrovod extends Card {
  constructor(game) {
    super(game, "Bazaar Krovod", "Return to Ravnica", "RTR");
  }
}

module.exports = BazaarKrovod;
