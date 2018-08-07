"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setCM2/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor (game) {
    super(game, "Inferno Titan", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = InfernoTitan;
