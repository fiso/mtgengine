"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreSavant extends Card {
  constructor(game) {
    super(game, "Ogre Savant", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = OgreSavant;
