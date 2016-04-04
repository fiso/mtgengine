"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazormaneMasticore extends Card {
  constructor(game) {
    super(game, "Razormane Masticore", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RazormaneMasticore;
