"use strict";
const Constants = require ("../../../Constants");
const SpikeWeaverBase = require("../setBRB/SpikeWeaver");

class SpikeWeaver extends SpikeWeaverBase {
  constructor (game) {
    super(game, "Spike Weaver", "Exodus", "EXO");
  }
}

module.exports = SpikeWeaver;
