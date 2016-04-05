"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurrakarBanisher extends UnimplementedCard {
  constructor(game) {
    super(game, "Surrakar Banisher", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = SurrakarBanisher;
