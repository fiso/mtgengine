"use strict";
const Constants = require ("../../../Constants");
const GoldnightRedeemerBase = require("../setAVR/GoldnightRedeemer");

class GoldnightRedeemer extends GoldnightRedeemerBase {
  constructor (game) {
    super(game, "Goldnight Redeemer", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GoldnightRedeemer;
