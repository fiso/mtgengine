"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnigmaSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Enigma Sphinx", "Alara Reborn", "ARB");
  }
}

module.exports = EnigmaSphinx;
