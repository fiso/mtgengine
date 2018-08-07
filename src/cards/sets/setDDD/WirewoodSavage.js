"use strict";
const Constants = require ("../../../Constants");
const WirewoodSavageBase = require("../setGVL/WirewoodSavage");

class WirewoodSavage extends WirewoodSavageBase {
  constructor (game) {
    super(game, "Wirewood Savage", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = WirewoodSavage;
