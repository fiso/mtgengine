"use strict";
const Constants = require ("../../../Constants");
const MyrEnforcerBase = require("../setMM2/MyrEnforcer");

class MyrEnforcer extends MyrEnforcerBase {
  constructor (game) {
    super(game, "Myr Enforcer", "Mirrodin", "MRD");
  }
}

module.exports = MyrEnforcer;
