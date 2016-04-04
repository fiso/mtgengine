"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggSentryBase = require("../set8ED/MoggSentry.js");

class MoggSentry extends MoggSentryBase {
  constructor(game) {
    super(game, "Mogg Sentry", "Planeshift", "PLS");
  }
}

module.exports = MoggSentry;
