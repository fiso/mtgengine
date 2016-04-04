"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Foil extends Card {
  constructor(game) {
    super(game, "Foil", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Foil;
