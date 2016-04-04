"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BazaarTrader extends Card {
  constructor(game) {
    super(game, "Bazaar Trader", "Worldwake", "WWK");
  }
}

module.exports = BazaarTrader;
