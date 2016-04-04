"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorBarrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Razor Barrier", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RazorBarrier;
