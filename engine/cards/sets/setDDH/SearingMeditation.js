"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearingMeditation extends Card {
  constructor(game) {
    super(game, "Searing Meditation", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = SearingMeditation;
