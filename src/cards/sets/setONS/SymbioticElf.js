"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SymbioticElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Symbiotic Elf", "Onslaught", "ONS");
  }
}

module.exports = SymbioticElf;
