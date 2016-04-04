"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaggerbackBasilisk extends Card {
  constructor(game) {
    super(game, "Daggerback Basilisk", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = DaggerbackBasilisk;
