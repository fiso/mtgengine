"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor(game) {
    super(game, "Force Spike", "Seventh Edition", "7ED");
  }
}

module.exports = ForceSpike;
