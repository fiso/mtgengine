"use strict";
const Constants = require ("../../../Constants");
const ProdigalPyromancerBase = require("../setDPA/ProdigalPyromancer");

class ProdigalPyromancer extends ProdigalPyromancerBase {
  constructor(game) {
    super(game, "Prodigal Pyromancer", "Planar Chaos", "PLC");
  }
}

module.exports = ProdigalPyromancer;
