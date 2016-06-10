"use strict";
const Constants = require ("../../../Constants");
const TemporalAdeptBase = require("../set8ED/TemporalAdept");

class TemporalAdept extends TemporalAdeptBase {
  constructor (game) {
    super(game, "Temporal Adept", "Seventh Edition", "7ED");
  }
}

module.exports = TemporalAdept;
