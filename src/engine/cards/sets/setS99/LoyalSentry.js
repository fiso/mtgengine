"use strict";
const Constants = require ("../../../Constants");
const LoyalSentryBase = require("../setA25/LoyalSentry");

class LoyalSentry extends LoyalSentryBase {
  constructor (game) {
    super(game, "Loyal Sentry", "Starter 1999", "S99");
  }
}

module.exports = LoyalSentry;
