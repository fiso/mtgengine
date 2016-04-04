"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IzzetCharm extends Card {
  constructor(game) {
    super(game, "Izzet Charm", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = IzzetCharm;
