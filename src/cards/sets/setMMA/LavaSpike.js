"use strict";
const Constants = require ("../../../Constants");
const LavaSpikeBase = require("../setCHK/LavaSpike");

class LavaSpike extends LavaSpikeBase {
  constructor (game) {
    super(game, "Lava Spike", "Modern Masters", "MMA");
  }
}

module.exports = LavaSpike;
