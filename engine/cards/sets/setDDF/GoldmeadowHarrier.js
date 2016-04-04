"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldmeadowHarrier extends Card {
  constructor(game) {
    super(game, "Goldmeadow Harrier", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = GoldmeadowHarrier;
