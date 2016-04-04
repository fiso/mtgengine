"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodOgre extends Card {
  constructor(game) {
    super(game, "Blood Ogre", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BloodOgre;
