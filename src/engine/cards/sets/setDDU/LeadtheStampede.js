"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeadtheStampede extends UnimplementedCard {
  constructor (game) {
    super(game, "Lead the Stampede", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = LeadtheStampede;
