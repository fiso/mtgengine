"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BazaarKrovod extends UnimplementedCard {
  constructor (game) {
    super(game, "Bazaar Krovod", "Return to Ravnica", "RTR");
  }
}

module.exports = BazaarKrovod;
