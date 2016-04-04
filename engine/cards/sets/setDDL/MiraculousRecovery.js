"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MiraculousRecovery extends Card {
  constructor(game) {
    super(game, "Miraculous Recovery", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = MiraculousRecovery;
