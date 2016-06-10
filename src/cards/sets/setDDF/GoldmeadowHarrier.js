"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldmeadowHarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Goldmeadow Harrier", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = GoldmeadowHarrier;
