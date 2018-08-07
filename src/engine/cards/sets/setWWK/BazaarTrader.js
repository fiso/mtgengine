"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BazaarTrader extends UnimplementedCard {
  constructor (game) {
    super(game, "Bazaar Trader", "Worldwake", "WWK");
  }
}

module.exports = BazaarTrader;
