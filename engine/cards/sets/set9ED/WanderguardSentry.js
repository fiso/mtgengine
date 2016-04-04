"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WanderguardSentryBase = require("../setMRD/WanderguardSentry.js");

class WanderguardSentry extends WanderguardSentryBase {
  constructor(game) {
    super(game, "Wanderguard Sentry", "Ninth Edition", "9ED");
  }
}

module.exports = WanderguardSentry;
