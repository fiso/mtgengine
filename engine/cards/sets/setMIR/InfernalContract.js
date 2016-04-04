"use strict";
const Constants = require ("../../../Constants");
const InfernalContractBase = require("../set6ED/InfernalContract");

class InfernalContract extends InfernalContractBase {
  constructor(game) {
    super(game, "Infernal Contract", "Mirage", "MIR");
  }
}

module.exports = InfernalContract;
