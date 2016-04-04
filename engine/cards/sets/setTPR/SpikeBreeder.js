"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeBreederBase = require("../setSTH/SpikeBreeder.js");

class SpikeBreeder extends SpikeBreederBase {
  constructor(game) {
    super(game, "Spike Breeder", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeBreeder;
