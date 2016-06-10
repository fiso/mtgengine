"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerratedBiskelion extends UnimplementedCard {
  constructor (game) {
    super(game, "Serrated Biskelion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SerratedBiskelion;
