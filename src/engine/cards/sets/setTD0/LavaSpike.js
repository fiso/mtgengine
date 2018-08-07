"use strict";
const Constants = require ("../../../Constants");
const LavaSpikeBase = require("../setMMA/LavaSpike");

class LavaSpike extends LavaSpikeBase {
  constructor (game) {
    super(game, "Lava Spike", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = LavaSpike;
