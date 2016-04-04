"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanguineGuard extends Card {
  constructor(game) {
    super(game, "Sanguine Guard", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = SanguineGuard;
