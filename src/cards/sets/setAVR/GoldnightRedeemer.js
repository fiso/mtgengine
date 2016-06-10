"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldnightRedeemer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldnight Redeemer", "Avacyn Restored", "AVR");
  }
}

module.exports = GoldnightRedeemer;
