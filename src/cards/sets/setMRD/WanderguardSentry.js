"use strict";
const Constants = require ("../../../Constants");
const WanderguardSentryBase = require("../set9ED/WanderguardSentry");

class WanderguardSentry extends WanderguardSentryBase {
  constructor (game) {
    super(game, "Wanderguard Sentry", "Mirrodin", "MRD");
  }
}

module.exports = WanderguardSentry;
