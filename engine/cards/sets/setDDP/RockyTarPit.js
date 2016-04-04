"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockyTarPit extends Card {
  constructor(game) {
    super(game, "Rocky Tar Pit", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RockyTarPit;
