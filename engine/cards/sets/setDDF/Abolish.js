"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Abolish extends Card {
  constructor(game) {
    super(game, "Abolish", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Abolish;
