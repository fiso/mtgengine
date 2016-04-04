"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike.js");

class ForceSpike extends ForceSpikeBase {
  constructor(game) {
    super(game, "Force Spike", "Seventh Edition", "7ED");
  }
}

module.exports = ForceSpike;
