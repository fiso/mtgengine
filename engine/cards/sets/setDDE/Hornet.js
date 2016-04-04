"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Hornet extends Card {
  constructor(game) {
    super(game, "Hornet", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Hornet;
