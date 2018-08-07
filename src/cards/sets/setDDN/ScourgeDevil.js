"use strict";
const Constants = require ("../../../Constants");
const ScourgeDevilBase = require("../setMM3/ScourgeDevil");

class ScourgeDevil extends ScourgeDevilBase {
  constructor (game) {
    super(game, "Scourge Devil", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = ScourgeDevil;
