"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Sentry", "Masters 25", "A25");
  }
}

module.exports = LoyalSentry;
