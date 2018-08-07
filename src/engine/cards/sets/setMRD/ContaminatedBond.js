"use strict";
const Constants = require ("../../../Constants");
const ContaminatedBondBase = require("../set10E/ContaminatedBond");

class ContaminatedBond extends ContaminatedBondBase {
  constructor (game) {
    super(game, "Contaminated Bond", "Mirrodin", "MRD");
  }
}

module.exports = ContaminatedBond;
