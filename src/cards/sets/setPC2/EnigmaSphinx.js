"use strict";
const Constants = require ("../../../Constants");
const EnigmaSphinxBase = require("../setARB/EnigmaSphinx");

class EnigmaSphinx extends EnigmaSphinxBase {
  constructor (game) {
    super(game, "Enigma Sphinx", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = EnigmaSphinx;
