"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakindiGriffin extends Card {
  constructor(game) {
    super(game, "Makindi Griffin", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = MakindiGriffin;
