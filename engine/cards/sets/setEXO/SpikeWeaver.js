"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeWeaverBase = require("../setBRB/SpikeWeaver.js");

class SpikeWeaver extends SpikeWeaverBase {
  constructor(game) {
    super(game, "Spike Weaver", "Exodus", "EXO");
  }
}

module.exports = SpikeWeaver;
