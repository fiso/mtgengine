"use strict";
const Constants = require ("../../../Constants");
const HowlingBansheeBase = require("../setGVL/HowlingBanshee");

class HowlingBanshee extends HowlingBansheeBase {
  constructor (game) {
    super(game, "Howling Banshee", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = HowlingBanshee;
