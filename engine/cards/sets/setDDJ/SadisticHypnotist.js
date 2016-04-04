"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SadisticHypnotist extends Card {
  constructor(game) {
    super(game, "Sadistic Hypnotist", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SadisticHypnotist;
