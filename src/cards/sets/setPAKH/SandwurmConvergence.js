"use strict";
const Constants = require ("../../../Constants");
const SandwurmConvergenceBase = require("../setAKH/SandwurmConvergence");

class SandwurmConvergence extends SandwurmConvergenceBase {
  constructor (game) {
    super(game, "Sandwurm Convergence", "Amonkhet Promos", "PAKH");
  }
}

module.exports = SandwurmConvergence;
