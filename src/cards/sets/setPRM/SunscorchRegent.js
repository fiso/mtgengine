"use strict";
const Constants = require ("../../../Constants");
const SunscorchRegentBase = require("../setC17/SunscorchRegent");

class SunscorchRegent extends SunscorchRegentBase {
  constructor (game) {
    super(game, "Sunscorch Regent", "Magic Online Promos", "PRM");
  }
}

module.exports = SunscorchRegent;
