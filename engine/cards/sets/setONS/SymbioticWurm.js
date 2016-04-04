"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SymbioticWurmBase = require("../setCMD/SymbioticWurm.js");

class SymbioticWurm extends SymbioticWurmBase {
  constructor(game) {
    super(game, "Symbiotic Wurm", "Onslaught", "ONS");
  }
}

module.exports = SymbioticWurm;
