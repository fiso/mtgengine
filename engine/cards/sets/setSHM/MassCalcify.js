"use strict";
const Constants = require ("../../../Constants");
const MassCalcifyBase = require("../setM15/MassCalcify");

class MassCalcify extends MassCalcifyBase {
  constructor(game) {
    super(game, "Mass Calcify", "Shadowmoor", "SHM");
  }
}

module.exports = MassCalcify;
