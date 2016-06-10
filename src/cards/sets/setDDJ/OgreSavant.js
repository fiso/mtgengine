"use strict";
const Constants = require ("../../../Constants");
const OgreSavantBase = require("../setDDH/OgreSavant");

class OgreSavant extends OgreSavantBase {
  constructor (game) {
    super(game, "Ogre Savant", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = OgreSavant;
