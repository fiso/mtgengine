"use strict";
const Constants = require ("../../../Constants");
const MoggSentryBase = require("../set8ED/MoggSentry");

class MoggSentry extends MoggSentryBase {
  constructor(game) {
    super(game, "Mogg Sentry", "Planeshift", "PLS");
  }
}

module.exports = MoggSentry;
