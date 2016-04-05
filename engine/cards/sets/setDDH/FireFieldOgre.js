"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireFieldOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire-Field Ogre", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FireFieldOgre;
