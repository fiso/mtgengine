"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeastWithin extends Card {
  constructor(game) {
    super(game, "Beast Within", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BeastWithin;
