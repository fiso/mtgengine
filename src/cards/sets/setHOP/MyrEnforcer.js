"use strict";
const Constants = require ("../../../Constants");
const MyrEnforcerBase = require("../setpFNM/MyrEnforcer");

class MyrEnforcer extends MyrEnforcerBase {
  constructor (game) {
    super(game, "Myr Enforcer", "Planechase", "HOP");
  }
}

module.exports = MyrEnforcer;
