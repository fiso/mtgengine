"use strict";
const Constants = require ("../../../Constants");
const MasterBiomancerBase = require("../setCM2/MasterBiomancer");

class MasterBiomancer extends MasterBiomancerBase {
  constructor (game) {
    super(game, "Master Biomancer", "Commander 2016", "C16");
  }
}

module.exports = MasterBiomancer;
