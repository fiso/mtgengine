"use strict";
const Constants = require ("../../../Constants");
const SymbioticWurmBase = require("../setCMD/SymbioticWurm");

class SymbioticWurm extends SymbioticWurmBase {
  constructor (game) {
    super(game, "Symbiotic Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = SymbioticWurm;
