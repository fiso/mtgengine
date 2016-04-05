"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor(game) {
    super(game, "Force Spike", "Fifth Edition", "5ED");
  }
}

module.exports = ForceSpike;
