"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CavalryPegasus extends Card {
  constructor(game) {
    super(game, "Cavalry Pegasus", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = CavalryPegasus;
