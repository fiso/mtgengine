"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnblinkingBleb extends Card {
  constructor(game) {
    super(game, "Unblinking Bleb", "Future Sight", "FUT");
  }
}

module.exports = UnblinkingBleb;
