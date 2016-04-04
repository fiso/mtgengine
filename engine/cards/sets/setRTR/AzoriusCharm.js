"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzoriusCharm extends Card {
  constructor(game) {
    super(game, "Azorius Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusCharm;
