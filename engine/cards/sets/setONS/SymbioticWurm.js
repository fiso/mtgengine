"use strict";
const Constants = require ("../../../Constants");
const SymbioticWurmBase = require("../setCMD/SymbioticWurm");

class SymbioticWurm extends SymbioticWurmBase {
  constructor(game) {
    super(game, "Symbiotic Wurm", "Onslaught", "ONS");
  }
}

module.exports = SymbioticWurm;
