"use strict";
const Constants = require ("../../../Constants");
const ProdigalPyromancerBase = require("../setDPA/ProdigalPyromancer");

class ProdigalPyromancer extends ProdigalPyromancerBase {
  constructor(game) {
    super(game, "Prodigal Pyromancer", "Tenth Edition", "10E");
  }
}

module.exports = ProdigalPyromancer;
