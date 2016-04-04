"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErraticMutationBase = require("../setMMA/ErraticMutation.js");

class ErraticMutation extends ErraticMutationBase {
  constructor(game) {
    super(game, "Erratic Mutation", "Planar Chaos", "PLC");
  }
}

module.exports = ErraticMutation;
