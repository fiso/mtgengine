"use strict";
const Constants = require ("../../../Constants");
const FrogmiteBase = require("../setMM2/Frogmite");

class Frogmite extends FrogmiteBase {
  constructor (game) {
    super(game, "Frogmite", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Frogmite;
