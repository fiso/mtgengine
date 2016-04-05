"use strict";
const Constants = require ("../../../Constants");
const VileRequiemBase = require("../setC13/VileRequiem");

class VileRequiem extends VileRequiemBase {
  constructor(game) {
    super(game, "Vile Requiem", "Urza's Saga", "USG");
  }
}

module.exports = VileRequiem;
