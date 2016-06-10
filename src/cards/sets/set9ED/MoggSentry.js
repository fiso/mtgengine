"use strict";
const Constants = require ("../../../Constants");
const MoggSentryBase = require("../set8ED/MoggSentry");

class MoggSentry extends MoggSentryBase {
  constructor (game) {
    super(game, "Mogg Sentry", "Ninth Edition", "9ED");
  }
}

module.exports = MoggSentry;
