"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Plains;
