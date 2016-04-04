"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarigaaztheIgniter extends Card {
  constructor(game) {
    super(game, "Darigaaz, the Igniter", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = DarigaaztheIgniter;
