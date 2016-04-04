"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Silver Myr", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SilverMyr;
