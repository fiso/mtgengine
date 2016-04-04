"use strict";
const Constants = require ("../../../Constants");
const ContaminatedBondBase = require("../setMRD/ContaminatedBond");

class ContaminatedBond extends ContaminatedBondBase {
  constructor(game) {
    super(game, "Contaminated Bond", "Tenth Edition", "10E");
  }
}

module.exports = ContaminatedBond;
