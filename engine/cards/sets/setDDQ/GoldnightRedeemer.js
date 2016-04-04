"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoldnightRedeemerBase = require("../setAVR/GoldnightRedeemer.js");

class GoldnightRedeemer extends GoldnightRedeemerBase {
  constructor(game) {
    super(game, "Goldnight Redeemer", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GoldnightRedeemer;
