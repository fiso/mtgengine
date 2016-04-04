"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneworkPuma extends Card {
  constructor(game) {
    super(game, "Stonework Puma", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = StoneworkPuma;
