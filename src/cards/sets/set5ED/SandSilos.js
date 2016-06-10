"use strict";
const Constants = require ("../../../Constants");
const SandSilosBase = require("../setFEM/SandSilos");

class SandSilos extends SandSilosBase {
  constructor (game) {
    super(game, "Sand Silos", "Fifth Edition", "5ED");
  }
}

module.exports = SandSilos;
