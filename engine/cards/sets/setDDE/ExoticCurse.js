"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExoticCurse extends Card {
  constructor(game) {
    super(game, "Exotic Curse", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = ExoticCurse;
