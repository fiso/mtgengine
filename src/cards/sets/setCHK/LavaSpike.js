"use strict";
const Constants = require ("../../../Constants");
const LavaSpikeBase = require("../setMMA/LavaSpike");

class LavaSpike extends LavaSpikeBase {
  constructor (game) {
    super(game, "Lava Spike", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LavaSpike;
