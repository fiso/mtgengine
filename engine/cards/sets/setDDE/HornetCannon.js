"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornetCannon extends Card {
  constructor(game) {
    super(game, "Hornet Cannon", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = HornetCannon;
