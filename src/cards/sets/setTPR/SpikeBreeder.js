"use strict";
const Constants = require ("../../../Constants");
const SpikeBreederBase = require("../setSTH/SpikeBreeder");

class SpikeBreeder extends SpikeBreederBase {
  constructor (game) {
    super(game, "Spike Breeder", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeBreeder;
