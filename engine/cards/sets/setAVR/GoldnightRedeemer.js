"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldnightRedeemer extends Card {
  constructor(game) {
    super(game, "Goldnight Redeemer", "Avacyn Restored", "AVR");
  }
}

module.exports = GoldnightRedeemer;
