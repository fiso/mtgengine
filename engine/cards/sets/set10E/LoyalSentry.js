"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoyalSentryBase = require("../setDDF/LoyalSentry.js");

class LoyalSentry extends LoyalSentryBase {
  constructor(game) {
    super(game, "Loyal Sentry", "Tenth Edition", "10E");
  }
}

module.exports = LoyalSentry;
