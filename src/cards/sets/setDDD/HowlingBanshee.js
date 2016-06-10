"use strict";
const Constants = require ("../../../Constants");
const HowlingBansheeBase = require("../setDD3_GVL/HowlingBanshee");

class HowlingBanshee extends HowlingBansheeBase {
  constructor (game) {
    super(game, "Howling Banshee", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = HowlingBanshee;
