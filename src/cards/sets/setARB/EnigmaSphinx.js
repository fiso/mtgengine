"use strict";
const Constants = require ("../../../Constants");
const EnigmaSphinxBase = require("../setC18/EnigmaSphinx");

class EnigmaSphinx extends EnigmaSphinxBase {
  constructor (game) {
    super(game, "Enigma Sphinx", "Alara Reborn", "ARB");
  }
}

module.exports = EnigmaSphinx;
