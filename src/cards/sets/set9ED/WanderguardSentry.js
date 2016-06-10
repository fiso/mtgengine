"use strict";
const Constants = require ("../../../Constants");
const WanderguardSentryBase = require("../setMRD/WanderguardSentry");

class WanderguardSentry extends WanderguardSentryBase {
  constructor (game) {
    super(game, "Wanderguard Sentry", "Ninth Edition", "9ED");
  }
}

module.exports = WanderguardSentry;
