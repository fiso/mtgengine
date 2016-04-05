"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhov Charm", "Gatecrash", "GTC");
  }
}

module.exports = OrzhovCharm;
