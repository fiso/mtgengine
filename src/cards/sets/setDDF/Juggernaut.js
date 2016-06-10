"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setARC/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor (game) {
    super(game, "Juggernaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Juggernaut;
