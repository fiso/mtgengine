"use strict";
const Constants = require ("../../../Constants");
const SerpentineSpikeBase = require("../setBFZ/SerpentineSpike");

class SerpentineSpike extends SerpentineSpikeBase {
  constructor (game) {
    super(game, "Serpentine Spike", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = SerpentineSpike;
