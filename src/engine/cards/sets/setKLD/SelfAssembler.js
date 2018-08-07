"use strict";
const Constants = require ("../../../Constants");
const SelfAssemblerBase = require("../setA25/SelfAssembler");

class SelfAssembler extends SelfAssemblerBase {
  constructor (game) {
    super(game, "Self-Assembler", "Kaladesh", "KLD");
  }
}

module.exports = SelfAssembler;
