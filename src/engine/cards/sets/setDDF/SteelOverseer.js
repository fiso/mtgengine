"use strict";
const Constants = require ("../../../Constants");
const SteelOverseerBase = require("../setMPS/SteelOverseer");

class SteelOverseer extends SteelOverseerBase {
  constructor (game) {
    super(game, "Steel Overseer", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SteelOverseer;
