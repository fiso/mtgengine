"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrontierGuide extends Card {
  constructor(game) {
    super(game, "Frontier Guide", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = FrontierGuide;
