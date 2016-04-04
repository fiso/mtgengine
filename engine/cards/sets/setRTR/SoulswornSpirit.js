"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulswornSpirit extends Card {
  constructor(game) {
    super(game, "Soulsworn Spirit", "Return to Ravnica", "RTR");
  }
}

module.exports = SoulswornSpirit;
