"use strict";
const Constants = require ("../../../Constants");
const GoldnightRedeemerBase = require("../setDDQ/GoldnightRedeemer");

class GoldnightRedeemer extends GoldnightRedeemerBase {
  constructor (game) {
    super(game, "Goldnight Redeemer", "Avacyn Restored", "AVR");
  }
}

module.exports = GoldnightRedeemer;
