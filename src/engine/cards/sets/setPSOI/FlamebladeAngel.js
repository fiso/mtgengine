"use strict";
const Constants = require ("../../../Constants");
const FlamebladeAngelBase = require("../setSOI/FlamebladeAngel");

class FlamebladeAngel extends FlamebladeAngelBase {
  constructor (game) {
    super(game, "Flameblade Angel", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = FlamebladeAngel;
