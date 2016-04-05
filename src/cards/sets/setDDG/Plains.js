"use strict";
const Constants = require ("../../../Constants");
const PlainsBase = require("../setATH/Plains");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = Plains;
