"use strict";
const Constants = require ("../../../Constants");
const InkwellLeviathanBase = require("../setCON/InkwellLeviathan");

class InkwellLeviathan extends InkwellLeviathanBase {
  constructor (game) {
    super(game, "Inkwell Leviathan", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = InkwellLeviathan;
