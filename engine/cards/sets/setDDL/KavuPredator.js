"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuPredator extends Card {
  constructor(game) {
    super(game, "Kavu Predator", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = KavuPredator;
