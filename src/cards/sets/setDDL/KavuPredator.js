"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Predator", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = KavuPredator;
