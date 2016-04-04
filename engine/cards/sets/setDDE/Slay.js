"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Slay extends Card {
  constructor(game) {
    super(game, "Slay", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = Slay;
