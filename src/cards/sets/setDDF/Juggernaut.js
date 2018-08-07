"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setBBD/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor (game) {
    super(game, "Juggernaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Juggernaut;
