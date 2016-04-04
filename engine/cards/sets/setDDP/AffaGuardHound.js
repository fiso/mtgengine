"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AffaGuardHound extends Card {
  constructor(game) {
    super(game, "Affa Guard Hound", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = AffaGuardHound;
