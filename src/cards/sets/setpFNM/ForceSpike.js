"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor(game) {
    super(game, "Force Spike", "Friday Night Magic", "pFNM");
  }
}

module.exports = ForceSpike;
