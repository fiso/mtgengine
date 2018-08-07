"use strict";
const Constants = require ("../../../Constants");
const ArgentSphinxBase = require("../setMM2/ArgentSphinx");

class ArgentSphinx extends ArgentSphinxBase {
  constructor (game) {
    super(game, "Argent Sphinx", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = ArgentSphinx;
