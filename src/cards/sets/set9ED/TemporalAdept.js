"use strict";
const Constants = require ("../../../Constants");
const TemporalAdeptBase = require("../set8ED/TemporalAdept");

class TemporalAdept extends TemporalAdeptBase {
  constructor(game) {
    super(game, "Temporal Adept", "Ninth Edition", "9ED");
  }
}

module.exports = TemporalAdept;
