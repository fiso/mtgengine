"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElixirofImmortality extends Card {
  constructor(game) {
    super(game, "Elixir of Immortality", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ElixirofImmortality;
