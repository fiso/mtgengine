"use strict";
const Constants = require ("../../../Constants");
const ErraticMutationBase = require("../setMMA/ErraticMutation");

class ErraticMutation extends ErraticMutationBase {
  constructor(game) {
    super(game, "Erratic Mutation", "Planar Chaos", "PLC");
  }
}

module.exports = ErraticMutation;
