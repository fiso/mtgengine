"use strict";
const Constants = require ("../../../Constants");
const TempleAcolyteBase = require("../setME4/TempleAcolyte");

class TempleAcolyte extends TempleAcolyteBase {
  constructor (game) {
    super(game, "Temple Acolyte", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TempleAcolyte;
