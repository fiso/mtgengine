"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TruefirePaladin extends Card {
  constructor(game) {
    super(game, "Truefire Paladin", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TruefirePaladin;
