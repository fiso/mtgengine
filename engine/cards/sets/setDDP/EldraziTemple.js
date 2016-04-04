"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziTemple extends Card {
  constructor(game) {
    super(game, "Eldrazi Temple", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EldraziTemple;
