"use strict";
const Constants = require ("../../../Constants");
const SunscorchRegentBase = require("../setC17/SunscorchRegent");

class SunscorchRegent extends SunscorchRegentBase {
  constructor (game) {
    super(game, "Sunscorch Regent", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = SunscorchRegent;
