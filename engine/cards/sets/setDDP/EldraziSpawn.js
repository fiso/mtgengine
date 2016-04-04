"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziSpawn extends Card {
  constructor(game) {
    super(game, "Eldrazi Spawn", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EldraziSpawn;
