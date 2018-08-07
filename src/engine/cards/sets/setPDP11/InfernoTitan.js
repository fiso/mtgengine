"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setCM2/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor (game) {
    super(game, "Inferno Titan", "Duels of the Planeswalkers Promos 2011", "PDP11");
  }
}

module.exports = InfernoTitan;
