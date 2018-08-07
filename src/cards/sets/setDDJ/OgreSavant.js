"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreSavant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Savant", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = OgreSavant;
