"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfernoTitanBase = require("../setC13/InfernoTitan.js");

class InfernoTitan extends InfernoTitanBase {
  constructor(game) {
    super(game, "Inferno Titan", "Commander 2015", "C15");
  }
}

module.exports = InfernoTitan;
