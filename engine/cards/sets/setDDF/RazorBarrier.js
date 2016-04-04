"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazorBarrier extends Card {
  constructor(game) {
    super(game, "Razor Barrier", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RazorBarrier;
