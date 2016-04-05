"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Ogre", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BloodOgre;
