"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setCM2/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor (game) {
    super(game, "Inferno Titan", "Commander 2013", "C13");
  }
}

module.exports = InfernoTitan;
