"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike.js");

class ForceSpike extends ForceSpikeBase {
  constructor(game) {
    super(game, "Force Spike", "Masters Edition III", "ME3");
  }
}

module.exports = ForceSpike;
