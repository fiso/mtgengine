"use strict";
const Constants = require ("../../../Constants");
const OgreSavantBase = require("../setDDJ/OgreSavant");

class OgreSavant extends OgreSavantBase {
  constructor (game) {
    super(game, "Ogre Savant", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = OgreSavant;
