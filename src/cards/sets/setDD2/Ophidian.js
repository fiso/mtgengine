"use strict";
const Constants = require ("../../../Constants");
const OphidianBase = require("../setDD3_JVC/Ophidian");

class Ophidian extends OphidianBase {
  constructor (game) {
    super(game, "Ophidian", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Ophidian;
