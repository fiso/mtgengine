"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Minion extends Card {
  constructor(game) {
    super(game, "Minion", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Minion;
