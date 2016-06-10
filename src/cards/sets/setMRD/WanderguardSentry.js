"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderguardSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Wanderguard Sentry", "Mirrodin", "MRD");
  }
}

module.exports = WanderguardSentry;
