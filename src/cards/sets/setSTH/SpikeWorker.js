"use strict";
const Constants = require ("../../../Constants");
const SpikeWorkerBase = require("../setBRB/SpikeWorker");

class SpikeWorker extends SpikeWorkerBase {
  constructor (game) {
    super(game, "Spike Worker", "Stronghold", "STH");
  }
}

module.exports = SpikeWorker;
