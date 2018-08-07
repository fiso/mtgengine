"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor (game) {
    super(game, "Force Spike", "Magic Online Promos", "PRM");
  }
}

module.exports = ForceSpike;
