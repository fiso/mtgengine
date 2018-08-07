"use strict";
const Constants = require ("../../../Constants");
const SpikeFeederBase = require("../setTPR/SpikeFeeder");

class SpikeFeeder extends SpikeFeederBase {
  constructor (game) {
    super(game, "Spike Feeder", "World Championship Decks 1998", "WC98");
  }
}

module.exports = SpikeFeeder;
