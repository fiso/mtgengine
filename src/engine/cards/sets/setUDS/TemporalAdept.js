"use strict";
const Constants = require ("../../../Constants");
const TemporalAdeptBase = require("../set9ED/TemporalAdept");

class TemporalAdept extends TemporalAdeptBase {
  constructor (game) {
    super(game, "Temporal Adept", "Urza's Destiny", "UDS");
  }
}

module.exports = TemporalAdept;
