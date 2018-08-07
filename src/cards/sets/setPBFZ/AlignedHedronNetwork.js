"use strict";
const Constants = require ("../../../Constants");
const AlignedHedronNetworkBase = require("../setBFZ/AlignedHedronNetwork");

class AlignedHedronNetwork extends AlignedHedronNetworkBase {
  constructor (game) {
    super(game, "Aligned Hedron Network", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = AlignedHedronNetwork;
