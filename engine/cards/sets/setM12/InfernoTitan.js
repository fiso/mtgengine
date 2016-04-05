"use strict";
const Constants = require ("../../../Constants");
const InfernoTitanBase = require("../setC13/InfernoTitan");

class InfernoTitan extends InfernoTitanBase {
  constructor(game) {
    super(game, "Inferno Titan", "Magic 2012", "M12");
  }
}

module.exports = InfernoTitan;
