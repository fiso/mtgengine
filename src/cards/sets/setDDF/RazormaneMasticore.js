"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazormaneMasticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Razormane Masticore", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RazormaneMasticore;
