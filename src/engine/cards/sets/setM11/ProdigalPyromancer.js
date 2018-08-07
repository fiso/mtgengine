"use strict";
const Constants = require ("../../../Constants");
const ProdigalPyromancerBase = require("../setIMA/ProdigalPyromancer");

class ProdigalPyromancer extends ProdigalPyromancerBase {
  constructor (game) {
    super(game, "Prodigal Pyromancer", "Magic 2011", "M11");
  }
}

module.exports = ProdigalPyromancer;
