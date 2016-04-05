"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwilightsCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Twilight's Call", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = TwilightsCall;
