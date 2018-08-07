"use strict";
const Constants = require ("../../../Constants");
const SandSilosBase = require("../set5ED/SandSilos");

class SandSilos extends SandSilosBase {
  constructor (game) {
    super(game, "Sand Silos", "Fallen Empires", "FEM");
  }
}

module.exports = SandSilos;
