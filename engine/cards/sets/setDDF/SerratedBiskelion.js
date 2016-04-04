"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerratedBiskelion extends Card {
  constructor(game) {
    super(game, "Serrated Biskelion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SerratedBiskelion;
