"use strict";
const Constants = require ("../../../Constants");
const DecreeofJusticeBase = require("../setA25/DecreeofJustice");

class DecreeofJustice extends DecreeofJusticeBase {
  constructor (game) {
    super(game, "Decree of Justice", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = DecreeofJustice;
