"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Savant", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = OgreSavant;
