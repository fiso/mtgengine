"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleAcolyte extends Card {
  constructor(game) {
    super(game, "Temple Acolyte", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TempleAcolyte;
