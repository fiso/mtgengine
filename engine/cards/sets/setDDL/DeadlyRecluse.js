"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyRecluse extends Card {
  constructor(game) {
    super(game, "Deadly Recluse", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = DeadlyRecluse;
