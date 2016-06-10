"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TruefirePaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Truefire Paladin", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TruefirePaladin;
