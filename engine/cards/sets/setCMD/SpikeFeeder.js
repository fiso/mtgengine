"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeFeederBase = require("../setBRB/SpikeFeeder.js");

class SpikeFeeder extends SpikeFeederBase {
  constructor(game) {
    super(game, "Spike Feeder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SpikeFeeder;
