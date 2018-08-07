"use strict";
const Constants = require ("../../../Constants");
const DevilsPlaygroundBase = require("../setSOI/DevilsPlayground");

class DevilsPlayground extends DevilsPlaygroundBase {
  constructor (game) {
    super(game, "Devils' Playground", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DevilsPlayground;
