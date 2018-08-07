"use strict";
const Constants = require ("../../../Constants");
const CorruptedGrafstoneBase = require("../setSOI/CorruptedGrafstone");

class CorruptedGrafstone extends CorruptedGrafstoneBase {
  constructor (game) {
    super(game, "Corrupted Grafstone", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = CorruptedGrafstone;
