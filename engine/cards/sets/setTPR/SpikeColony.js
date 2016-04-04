"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeColonyBase = require("../setBRB/SpikeColony.js");

class SpikeColony extends SpikeColonyBase {
  constructor(game) {
    super(game, "Spike Colony", "Tempest Remastered", "TPR");
  }
}

module.exports = SpikeColony;
