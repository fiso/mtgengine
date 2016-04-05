"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setC13/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor(game) {
    super(game, "Inferno Titan", "Commander 2015", "C15");
  }
}

module.exports = InfernoTitan;
