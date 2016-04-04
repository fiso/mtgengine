"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TajuruArcher extends Card {
  constructor(game) {
    super(game, "Tajuru Archer", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = TajuruArcher;
