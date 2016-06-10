"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setC13/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor (game) {
    super(game, "Inferno Titan", "Media Inserts", "pMEI");
  }
}

module.exports = InfernoTitan;
