"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnigmaSphinx extends Card {
  constructor(game) {
    super(game, "Enigma Sphinx", "Alara Reborn", "ARB");
  }
}

module.exports = EnigmaSphinx;
