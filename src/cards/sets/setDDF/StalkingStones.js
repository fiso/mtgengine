"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StalkingStones extends UnimplementedCard {
  constructor (game) {
    super(game, "Stalking Stones", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = StalkingStones;
