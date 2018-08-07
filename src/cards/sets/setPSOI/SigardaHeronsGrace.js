"use strict";
const Constants = require ("../../../Constants");
const SigardaHeronsGraceBase = require("../setSOI/SigardaHeronsGrace");

class SigardaHeronsGrace extends SigardaHeronsGraceBase {
  constructor (game) {
    super(game, "Sigarda, Heron's Grace", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SigardaHeronsGrace;
