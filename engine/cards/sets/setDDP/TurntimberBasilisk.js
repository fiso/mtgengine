"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntimberBasilisk extends Card {
  constructor(game) {
    super(game, "Turntimber Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TurntimberBasilisk;
