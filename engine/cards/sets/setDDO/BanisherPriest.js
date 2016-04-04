"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanisherPriest extends Card {
  constructor(game) {
    super(game, "Banisher Priest", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = BanisherPriest;
