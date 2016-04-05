"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeWorker extends UnimplementedCard {
  constructor(game) {
    super(game, "Spike Worker", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeWorker;
