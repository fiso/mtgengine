"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InfernoTitanBase = require("../setC13/InfernoTitan.js");

class InfernoTitan extends InfernoTitanBase {
  constructor(game) {
    super(game, "Inferno Titan", "Magic 2012", "M12");
  }
}

module.exports = InfernoTitan;
