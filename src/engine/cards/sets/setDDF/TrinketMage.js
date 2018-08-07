"use strict";
const Constants = require ("../../../Constants");
const TrinketMageBase = require("../setDDU/TrinketMage");

class TrinketMage extends TrinketMageBase {
  constructor (game) {
    super(game, "Trinket Mage", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TrinketMage;
