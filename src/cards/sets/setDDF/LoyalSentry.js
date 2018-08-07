"use strict";
const Constants = require ("../../../Constants");
const LoyalSentryBase = require("../setA25/LoyalSentry");

class LoyalSentry extends LoyalSentryBase {
  constructor (game) {
    super(game, "Loyal Sentry", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = LoyalSentry;
