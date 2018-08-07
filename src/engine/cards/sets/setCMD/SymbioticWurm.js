"use strict";
const Constants = require ("../../../Constants");
const SymbioticWurmBase = require("../setVMA/SymbioticWurm");

class SymbioticWurm extends SymbioticWurmBase {
  constructor (game) {
    super(game, "Symbiotic Wurm", "Commander 2011", "CMD");
  }
}

module.exports = SymbioticWurm;
