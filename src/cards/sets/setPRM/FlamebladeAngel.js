"use strict";
const Constants = require ("../../../Constants");
const FlamebladeAngelBase = require("../setSOI/FlamebladeAngel");

class FlamebladeAngel extends FlamebladeAngelBase {
  constructor (game) {
    super(game, "Flameblade Angel", "Magic Online Promos", "PRM");
  }
}

module.exports = FlamebladeAngel;
