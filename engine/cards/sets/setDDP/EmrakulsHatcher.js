"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmrakulsHatcher extends Card {
  constructor(game) {
    super(game, "Emrakul's Hatcher", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EmrakulsHatcher;
