"use strict";
const Constants = require ("../../../Constants");
const WhitemaneLionBase = require("../setA25/WhitemaneLion");

class WhitemaneLion extends WhitemaneLionBase {
  constructor (game) {
    super(game, "Whitemane Lion", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = WhitemaneLion;
