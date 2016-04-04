"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireFieldOgre extends Card {
  constructor(game) {
    super(game, "Fire-Field Ogre", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = FireFieldOgre;
