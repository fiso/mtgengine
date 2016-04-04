"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TribalFlames extends Card {
  constructor(game) {
    super(game, "Tribal Flames", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = TribalFlames;
