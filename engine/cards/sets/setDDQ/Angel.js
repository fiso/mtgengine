"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Angel extends Card {
  constructor(game) {
    super(game, "Angel", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Angel;
