"use strict";
const Constants = require ("../../../Constants");
const ElixirofImmortalityBase = require("../setM14/ElixirofImmortality");

class ElixirofImmortality extends ElixirofImmortalityBase {
  constructor (game) {
    super(game, "Elixir of Immortality", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ElixirofImmortality;
