"use strict";
const Constants = require ("../../../Constants");
const MoggSentryBase = require("../set9ED/MoggSentry");

class MoggSentry extends MoggSentryBase {
  constructor (game) {
    super(game, "Mogg Sentry", "Eighth Edition", "8ED");
  }
}

module.exports = MoggSentry;
