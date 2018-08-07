"use strict";
const Constants = require ("../../../Constants");
const TemporalAdeptBase = require("../set9ED/TemporalAdept");

class TemporalAdept extends TemporalAdeptBase {
  constructor (game) {
    super(game, "Temporal Adept", "Eighth Edition", "8ED");
  }
}

module.exports = TemporalAdept;
