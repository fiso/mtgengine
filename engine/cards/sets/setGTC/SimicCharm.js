"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicCharm extends Card {
  constructor(game) {
    super(game, "Simic Charm", "Gatecrash", "GTC");
  }
}

module.exports = SimicCharm;
