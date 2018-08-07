"use strict";
const Constants = require ("../../../Constants");
const SymbioticElfBase = require("../setTD2/SymbioticElf");

class SymbioticElf extends SymbioticElfBase {
  constructor (game) {
    super(game, "Symbiotic Elf", "Onslaught", "ONS");
  }
}

module.exports = SymbioticElf;
