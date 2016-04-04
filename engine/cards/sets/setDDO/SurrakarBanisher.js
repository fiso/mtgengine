"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurrakarBanisher extends Card {
  constructor(game) {
    super(game, "Surrakar Banisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SurrakarBanisher;
