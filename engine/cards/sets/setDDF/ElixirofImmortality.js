"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElixirofImmortality extends UnimplementedCard {
  constructor(game) {
    super(game, "Elixir of Immortality", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ElixirofImmortality;
