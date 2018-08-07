"use strict";
const Constants = require ("../../../Constants");
const SymbioticWurmBase = require("../setVMA/SymbioticWurm");

class SymbioticWurm extends SymbioticWurmBase {
  constructor (game) {
    super(game, "Symbiotic Wurm", "World Championship Decks 2003", "WC03");
  }
}

module.exports = SymbioticWurm;
