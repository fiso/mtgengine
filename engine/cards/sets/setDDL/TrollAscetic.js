"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrollAscetic extends Card {
  constructor(game) {
    super(game, "Troll Ascetic", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = TrollAscetic;
