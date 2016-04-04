"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoyalSentryBase = require("../setDDF/LoyalSentry.js");

class LoyalSentry extends LoyalSentryBase {
  constructor(game) {
    super(game, "Loyal Sentry", "Starter 1999", "S99");
  }
}

module.exports = LoyalSentry;
