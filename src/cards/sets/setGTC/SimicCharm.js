"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Charm", "Gatecrash", "GTC");
  }
}

module.exports = SimicCharm;
