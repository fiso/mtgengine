"use strict";
const Constants = require ("../../../Constants");
const SpikeWeaverBase = require("../setBRB/SpikeWeaver");

class SpikeWeaver extends SpikeWeaverBase {
  constructor (game) {
    super(game, "Spike Weaver", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SpikeWeaver;
