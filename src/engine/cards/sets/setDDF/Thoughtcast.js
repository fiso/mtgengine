"use strict";
const Constants = require ("../../../Constants");
const ThoughtcastBase = require("../setMM2/Thoughtcast");

class Thoughtcast extends ThoughtcastBase {
  constructor (game) {
    super(game, "Thoughtcast", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Thoughtcast;
