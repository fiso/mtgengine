"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeWorkerBase = require("../setBRB/SpikeWorker.js");

class SpikeWorker extends SpikeWorkerBase {
  constructor(game) {
    super(game, "Spike Worker", "Stronghold", "STH");
  }
}

module.exports = SpikeWorker;
