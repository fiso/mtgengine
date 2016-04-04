"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KabiraCrossroads extends Card {
  constructor(game) {
    super(game, "Kabira Crossroads", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KabiraCrossroads;
