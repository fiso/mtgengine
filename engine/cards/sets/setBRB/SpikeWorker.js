"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeWorker extends Card {
  constructor(game) {
    super(game, "Spike Worker", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeWorker;
