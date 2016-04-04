"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavaSpikeBase = require("../setCHK/LavaSpike.js");

class LavaSpike extends LavaSpikeBase {
  constructor(game) {
    super(game, "Lava Spike", "Modern Masters", "MMA");
  }
}

module.exports = LavaSpike;
