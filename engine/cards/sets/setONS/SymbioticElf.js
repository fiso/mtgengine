"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SymbioticElf extends Card {
  constructor(game) {
    super(game, "Symbiotic Elf", "Onslaught", "ONS");
  }
}

module.exports = SymbioticElf;
