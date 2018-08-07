"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setCM2/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor (game) {
    super(game, "Inferno Titan", "Magic 2011", "M11");
  }
}

module.exports = InfernoTitan;
