"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor (game) {
    super(game, "Force Spike", "Friday Night Magic 2007", "F07");
  }
}

module.exports = ForceSpike;
