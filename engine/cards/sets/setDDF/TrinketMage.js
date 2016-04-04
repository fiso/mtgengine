"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrinketMage extends Card {
  constructor(game) {
    super(game, "Trinket Mage", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TrinketMage;
