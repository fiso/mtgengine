"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Charm", "Gatecrash", "GTC");
  }
}

module.exports = DimirCharm;
