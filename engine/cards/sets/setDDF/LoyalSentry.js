"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Loyal Sentry", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = LoyalSentry;
