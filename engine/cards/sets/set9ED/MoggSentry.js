"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggSentryBase = require("../set8ED/MoggSentry.js");

class MoggSentry extends MoggSentryBase {
  constructor(game) {
    super(game, "Mogg Sentry", "Ninth Edition", "9ED");
  }
}

module.exports = MoggSentry;
