"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SadisticAugermage extends Card {
  constructor(game) {
    super(game, "Sadistic Augermage", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SadisticAugermage;
