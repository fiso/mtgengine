"use strict";
const Constants = require ("../../../Constants");
const InkwellLeviathanBase = require("../setC18/InkwellLeviathan");

class InkwellLeviathan extends InkwellLeviathanBase {
  constructor (game) {
    super(game, "Inkwell Leviathan", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = InkwellLeviathan;
