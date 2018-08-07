"use strict";
const Constants = require ("../../../Constants");
const DiregrafColossusBase = require("../setSOI/DiregrafColossus");

class DiregrafColossus extends DiregrafColossusBase {
  constructor (game) {
    super(game, "Diregraf Colossus", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = DiregrafColossus;
