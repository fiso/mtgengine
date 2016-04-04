"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Frogmite extends Card {
  constructor(game) {
    super(game, "Frogmite", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Frogmite;
