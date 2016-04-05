"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafeholdSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Safehold Sentry", "Shadowmoor", "SHM");
  }
}

module.exports = SafeholdSentry;
